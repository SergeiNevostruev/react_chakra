import { Fieldset, Input } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";

import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
} from "@/components/ui/dialog";

import {
  type ApiError,
  type ItemPublic,
  type ItemUpdate,
  ItemsService,
} from "@/client";
import useCustomToast from "@/hooks/useCustomToast";
import { handleError } from "@/utils";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

interface EditItemProps {
  item: ItemPublic;
  isOpen: boolean;
  onClose: () => void;
}

const EditItem = ({ item, isOpen, onClose }: EditItemProps) => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      isSubmitting,
      errors,
      // isDirty
    },
  } = useForm<ItemUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: item,
  });

  const mutation = useMutation({
    mutationFn: (data: ItemUpdate) =>
      ItemsService.updateItem({ id: item.id, requestBody: data }),
    onSuccess: () => {
      showToast("Success!", "Item updated successfully.", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  const onSubmit: SubmitHandler<ItemUpdate> = async (data) => {
    mutation.mutate(data);
  };

  const onCancel = () => {
    reset();
    onClose();
  };

  return (
    <>
      <DialogRoot
        open={isOpen}
        lazyMount
        size={{ base: "sm", md: "md" }}
        onOpenChange={() => {
          onClose();
        }}
      >
        <DialogContent as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>Изменение пункта</DialogHeader>
          <DialogBody>
            <Fieldset.Root>
              <Fieldset.Content>
                <Field label="Title" invalid={!!errors.title}>
                  <Input
                    id="title"
                    {...register("title", {
                      required: "Title is required",
                    })}
                    type="text"
                  />
                  {errors.title && (
                    <Fieldset.ErrorText>
                      {errors.title.message}
                    </Fieldset.ErrorText>
                  )}
                </Field>
                <Field label="Description" mt={4}>
                  <Input
                    id="description"
                    {...register("description")}
                    placeholder="Description"
                    type="text"
                  />
                </Field>
              </Fieldset.Content>
            </Fieldset.Root>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline" onClick={onCancel}>
                Отмена
              </Button>
            </DialogActionTrigger>
            <Button variant="subtle" type="submit" loading={isSubmitting}>
              Сохранить
            </Button>
          </DialogFooter>
          <DialogCloseTrigger onClick={onClose} />
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default EditItem;
