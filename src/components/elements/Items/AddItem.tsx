import {
  Fieldset,
  // Button,
  // FormControl,
  // FormErrorMessage,
  // FormLabel,
  Input,
} from "@chakra-ui/react";
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

import { type ApiError, type ItemCreate, ItemsService } from "@/client";
import useCustomToast from "@/hooks/useCustomToast";
import { handleError } from "@/utils";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

interface AddItemProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddItem = ({ isOpen, onClose }: AddItemProps) => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ItemCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ItemCreate) =>
      ItemsService.createItem({ requestBody: data }),
    onSuccess: () => {
      showToast("Success!", "Item created successfully.", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  const onSubmit: SubmitHandler<ItemCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <DialogRoot open={isOpen} lazyMount size={{ base: "sm", md: "md" }}>
        <DialogContent as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>Добавить пункт</DialogHeader>
          <DialogBody>
            <Fieldset.Root>
              <Fieldset.Content>
                <Field label="Title" invalid={!!errors.title}>
                  <Input
                    id="title"
                    {...register("title", {
                      required: "Title is required.",
                    })}
                    placeholder="Title"
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
              <Button variant="outline" onClick={onClose}>
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

export default AddItem;
