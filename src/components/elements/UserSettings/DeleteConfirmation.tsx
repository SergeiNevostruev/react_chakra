import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

import { type ApiError, UsersService } from "@/client";
import useAuth from "@/hooks/useAuth";
import useCustomToast from "@/hooks/useCustomToast";
import { handleError } from "@/utils";

import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteConfirmation = ({ isOpen, onClose }: DeleteProps) => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast();
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const { logout } = useAuth();

  const mutation = useMutation({
    mutationFn: () => UsersService.deleteUserMe(),
    onSuccess: () => {
      showToast(
        "Success",
        "Your account has been successfully deleted.",
        "success"
      );
      logout();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });

  const onSubmit = async () => {
    mutation.mutate();
  };

  return (
    <>
      <DialogRoot
        open={isOpen}
        onOpenChange={onClose}
        // leastDestructiveRef={cancelRef}
        size={{ base: "sm", md: "md" }}
        // isCentered
      >
        <DialogContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>Confirmation Required</DialogHeader>

          <DialogBody>
            All your account data will be <strong>permanently deleted.</strong>{" "}
            If you are sure, please click <strong>"Confirm"</strong> to proceed.
            This action cannot be undone.
          </DialogBody>

          <DialogFooter gap={3}>
            <Button
              variant="solid"
              type="submit"
              loading={isSubmitting}
              background={"red.500"}
              color={"white"}
            >
              Confirm
            </Button>
            <Button ref={cancelRef} onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
        <DialogCloseTrigger onClick={onClose} />
      </DialogRoot>
    </>
  );
};

export default DeleteConfirmation;
