import { Fieldset, Flex, Input } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type UserPublic,
  type UserUpdate,
  UsersService,
} from "@/client";
import useCustomToast from "@/hooks/useCustomToast";
import { emailPattern, handleError } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogRoot,
  DialogCloseTrigger,
  DialogContent,
  DialogBody,
  DialogFooter,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

interface EditUserProps {
  user: UserPublic;
  isOpen: boolean;
  onClose: () => void;
}

interface UserUpdateForm extends UserUpdate {
  confirm_password: string;
}

const EditUser = ({ user, isOpen, onClose }: EditUserProps) => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<UserUpdateForm>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: user,
  });

  const mutation = useMutation({
    mutationFn: (data: UserUpdateForm) =>
      UsersService.updateUser({ userId: user.id, requestBody: data }),
    onSuccess: () => {
      showToast("Success!", "User updated successfully.", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const onSubmit: SubmitHandler<UserUpdateForm> = async (data) => {
    if (data.password === "") {
      data.password = undefined;
    }
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
        onOpenChange={onClose}
        size={{ base: "sm", md: "md" }}
        // isCentered
      >
        <DialogContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogCloseTrigger />
          <DialogHeader>Edit User</DialogHeader>
          <DialogBody pb={6}>
            <Fieldset.Root>
              <Fieldset.Content>
                <Field label="Email" invalid={!!errors.email}>
                  <Input
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: emailPattern,
                    })}
                    placeholder="Email"
                    type="email"
                  />
                  {errors.email && (
                    <Fieldset.ErrorText>
                      {errors.email.message}
                    </Fieldset.ErrorText>
                  )}
                </Field>
                <Field label="Full name" mt={4}>
                  <Input id="name" {...register("full_name")} type="text" />
                </Field>
                <Field label="Set Password" mt={4} invalid={!!errors.password}>
                  <Input
                    id="password"
                    {...register("password", {
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    placeholder="Password"
                    type="password"
                  />
                  {errors.password && (
                    <Fieldset.ErrorText>
                      {errors.password.message}
                    </Fieldset.ErrorText>
                  )}
                </Field>
                <Field
                  label="Confirm Password"
                  mt={4}
                  invalid={!!errors.confirm_password}
                >
                  <Input
                    id="confirm_password"
                    {...register("confirm_password", {
                      validate: (value) =>
                        value === getValues().password ||
                        "The passwords do not match",
                    })}
                    placeholder="Password"
                    type="password"
                  />
                  {errors.confirm_password && (
                    <Fieldset.ErrorText>
                      {errors.confirm_password.message}
                    </Fieldset.ErrorText>
                  )}
                </Field>
                <Flex>
                  <Field mt={4}>
                    <Checkbox {...register("is_superuser")} colorScheme="teal">
                      Суперпользователь?
                    </Checkbox>
                  </Field>
                  <Field mt={4}>
                    <Checkbox {...register("is_active")} colorScheme="teal">
                      Активный?
                    </Checkbox>
                  </Field>
                </Flex>
              </Fieldset.Content>
            </Fieldset.Root>
          </DialogBody>

          <DialogFooter gap={3}>
            <Button
              variant="surface"
              type="submit"
              loading={isSubmitting}
              disabled={!isDirty}
            >
              Сохранить
            </Button>
            <Button onClick={onCancel}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default EditUser;
