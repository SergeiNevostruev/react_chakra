import {} from // AlertDialog,
// AlertDialogBody,
// AlertDialogContent,
// AlertDialogFooter,
// AlertDialogHeader,
// AlertDialogOverlay,
// Button,
"@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

import { ItemsService, UsersService } from "@/client";
import useCustomToast from "@/hooks/useCustomToast";
import { Button } from "@/components/ui/button";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
} from "@/components/ui/dialog";

interface DeleteProps {
  type: string;
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const Delete = ({ type, id, isOpen, onClose }: DeleteProps) => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast();
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const deleteEntity = async (id: string) => {
    if (type === "Item") {
      await ItemsService.deleteItem({ id: id });
    } else if (type === "User") {
      await UsersService.deleteUser({ userId: id });
    } else {
      throw new Error(`Unexpected type: ${type}`);
    }
  };

  const mutation = useMutation({
    mutationFn: deleteEntity,
    onSuccess: () => {
      showToast(
        "Success",
        `The ${type.toLowerCase()} was deleted successfully.`,
        "success"
      );
      onClose();
    },
    onError: () => {
      showToast(
        "An error occurred.",
        `An error occurred while deleting the ${type.toLowerCase()}.`,
        "error"
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [type === "Item" ? "items" : "users"],
      });
    },
  });

  const onSubmit = async () => {
    mutation.mutate(id);
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
          <DialogHeader>Delete {type}</DialogHeader>

          <DialogBody>
            {type === "User" && (
              <span>
                Все элементы, связанные с этим пользователем, также будут{" "}
                <strong>далены безвозвратно. </strong>
              </span>
            )}
            Вы уверены? Вы не сможете отменить это действие.
          </DialogBody>

          <DialogFooter gap={3}>
            <Button variant="surface" type="submit" loading={isSubmitting}>
              Удалить навсегда
            </Button>
            <Button ref={cancelRef} onClick={onClose} disabled={isSubmitting}>
              Отмена
            </Button>
          </DialogFooter>
          <DialogCloseTrigger onClick={onClose} />
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default Delete;
