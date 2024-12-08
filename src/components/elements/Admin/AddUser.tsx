import { Fieldset, Flex, Input } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";

import { type UserCreate, UsersService } from "@/client";
import type { ApiError } from "@/client/core/ApiError";
import useCustomToast from "@/hooks/useCustomToast";
import { emailPattern, handleError } from "@/utils";
import {
  DialogHeader,
  DialogRoot,
  DialogCloseTrigger,
  DialogContent,
  DialogBody,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

interface AddUserProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserCreateForm extends UserCreate {
  confirm_password: string;
}

const AddUser = ({ isOpen, onClose }: AddUserProps) => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<UserCreateForm>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      full_name: "",
      password: "",
      confirm_password: "",
      is_superuser: false,
      is_active: false,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: UserCreate) =>
      UsersService.createUser({ requestBody: data }),
    onSuccess: () => {
      showToast("Success!", "User created successfully.", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const onSubmit: SubmitHandler<UserCreateForm> = (data) => {
    mutation.mutate(data);
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
          <DialogHeader>Add User</DialogHeader>
          <DialogCloseTrigger />
          <DialogBody pb={6}>
            <Fieldset.Root>
              <Fieldset.Content>
                <Field label="Email" required invalid={!!errors.email}>
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
                <Field label="Full name" mt={4} invalid={!!errors.full_name}>
                  <Input
                    id="name"
                    {...register("full_name")}
                    placeholder="Full name"
                    type="text"
                  />
                  {errors.full_name && (
                    <Fieldset.ErrorText>
                      {errors.full_name.message}
                    </Fieldset.ErrorText>
                  )}
                </Field>
                <Field
                  label="Set Password"
                  mt={4}
                  required
                  invalid={!!errors.password}
                >
                  <Input
                    id="password"
                    {...register("password", {
                      required: "Password is required",
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
                  required
                  invalid={!!errors.confirm_password}
                >
                  <Input
                    id="confirm_password"
                    {...register("confirm_password", {
                      required: "Please confirm your password",
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
                <Flex mt={4}>
                  <Field>
                    <Checkbox {...register("is_superuser")} colorScheme="teal">
                      Is superuser?
                    </Checkbox>
                  </Field>
                  <Field>
                    <Checkbox {...register("is_active")} colorScheme="teal">
                      Is active?
                    </Checkbox>
                  </Field>
                </Flex>
              </Fieldset.Content>
            </Fieldset.Root>
          </DialogBody>
          <DialogFooter gap={3}>
            <Button variant="solid" type="submit" loading={isSubmitting}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default AddUser;
