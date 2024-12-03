import { Container, Fieldset, Heading, Input, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { type SubmitHandler, useForm } from "react-hook-form";

import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

import { type ApiError, LoginService, type NewPassword } from "@/client";
import { isLoggedIn } from "@/hooks/useAuth";
import useCustomToast from "@/hooks/useCustomToast";
import { confirmPasswordRules, handleError, passwordRules } from "@/utils";

interface NewPasswordForm extends NewPassword {
  confirm_password: string;
}

export const Route = createFileRoute("/(auth)/reset-password")({
  component: ResetPassword,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      });
    }
  },
});

function ResetPassword() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<NewPasswordForm>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      new_password: "",
    },
  });
  const showToast = useCustomToast();
  const navigate = useNavigate();

  const resetPassword = async (data: NewPassword) => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) return;
    await LoginService.resetPassword({
      requestBody: { new_password: data.new_password, token: token },
    });
  };

  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      showToast("Success!", "Password updated successfully.", "success");
      reset();
      navigate({ to: "/login" });
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
  });

  const onSubmit: SubmitHandler<NewPasswordForm> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <Container
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      h="100vh"
      maxW="sm"
      alignItems="stretch"
      justifyContent="center"
      gap={4}
      centerContent
    >
      <Heading size="xl" color="ui.main" textAlign="center" mb={2}>
        Reset Password
      </Heading>
      <Text textAlign="center">
        Please enter your new password and confirm it to reset your password.
      </Text>
      <Fieldset.Root mt={4} invalid={!!errors.new_password}>
        <Field label="Set Password">
          <Input
            id="password"
            {...register("new_password", passwordRules())}
            placeholder="Password"
            type="password"
          />
          {errors.new_password && (
            <Fieldset.ErrorText>
              {errors.new_password.message}
            </Fieldset.ErrorText>
          )}
        </Field>
      </Fieldset.Root>
      <Fieldset.Root mt={4} invalid={!!errors.confirm_password}>
        <Field label="Confirm Password">
          <Input
            id="confirm_password"
            {...register("confirm_password", confirmPasswordRules(getValues))}
            placeholder="Password"
            type="password"
          />
          {errors.confirm_password && (
            <Fieldset.ErrorText>
              {errors.confirm_password.message}
            </Fieldset.ErrorText>
          )}
        </Field>
      </Fieldset.Root>
      <Button variant="solid" type="submit">
        Reset Password
      </Button>
    </Container>
  );
}
