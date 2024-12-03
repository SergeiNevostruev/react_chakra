import {
  Container,
  Flex,
  Fieldset,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import {
  Link as RouterLink,
  createFileRoute,
  redirect,
} from "@tanstack/react-router";
import { type SubmitHandler, useForm } from "react-hook-form";

import Logo from "@/assets/logo.svg";
import type { UserRegister } from "@/client";
import useAuth, { isLoggedIn } from "@/hooks/useAuth";
import { confirmPasswordRules, emailPattern, passwordRules } from "@/utils";

export const Route = createFileRoute("/(auth)/signup")({
  component: SignUp,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      });
    }
  },
});

interface UserRegisterForm extends UserRegister {
  confirm_password: string;
}

function SignUp() {
  const { signUpMutation } = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<UserRegisterForm>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      full_name: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit: SubmitHandler<UserRegisterForm> = (data) => {
    signUpMutation.mutate(data);
  };

  return (
    <>
      <Fieldset.Root>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justify="center"
          h="100vh"
        >
          <Container
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            h="100vh"
            maxW="sm"
            alignItems="stretch"
            justifyContent="center"
            gap={4}
            centerContent
            shadow={"md"}
          >
            <Image
              src={Logo}
              alt="FastAPI logo"
              height="auto"
              maxW="4xs"
              alignSelf="center"
              mb={4}
            />
            <Fieldset.Content>
              <Field label="Полное имя" invalid={!!errors.full_name}>
                <Input
                  id="full_name"
                  minLength={3}
                  {...register("full_name", {
                    required: "Full Name is required",
                  })}
                  placeholder="Полное имя"
                  type="text"
                />
                {errors.full_name && (
                  <Fieldset.ErrorText>
                    {errors.full_name.message}
                  </Fieldset.ErrorText>
                )}
              </Field>
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

              <Field label="Пароль" invalid={!!errors.password}>
                <Input
                  id="password"
                  {...register("password", passwordRules())}
                  placeholder="Пароль"
                  type="password"
                />
                {errors.password && (
                  <Fieldset.ErrorText>
                    {errors.password.message}
                  </Fieldset.ErrorText>
                )}
              </Field>

              <Field
                label="Повторите пароль"
                invalid={!!errors.confirm_password}
              >
                <Input
                  id="confirm_password"
                  {...register(
                    "confirm_password",
                    confirmPasswordRules(getValues)
                  )}
                  placeholder="Повторите пароль"
                  type="password"
                />
                {errors.confirm_password && (
                  <Fieldset.ErrorText>
                    {errors.confirm_password.message}
                  </Fieldset.ErrorText>
                )}
              </Field>
            </Fieldset.Content>
            <Button variant="solid" type="submit" loading={isSubmitting}>
              Регистрация
            </Button>
            <Text>
              Уже есть аккаунт?{" "}
              <Link as={RouterLink} href="/login" color="blue.500">
                Войти
              </Link>
            </Text>
          </Container>
        </Flex>
      </Fieldset.Root>
    </>
  );
}

export default SignUp;
