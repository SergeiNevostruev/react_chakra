import {
  Link as RouterLink,
  createFileRoute,
  redirect,
} from "@tanstack/react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuth, { isLoggedIn } from "@/hooks/useAuth";
import useBoolean from "@/hooks/useBoolean";
import { type Body_login_login_access_token as AccessToken } from "@/client";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  Container,
  Fieldset,
  IconButton,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import Logo from "@/assets/logo.svg";
import { emailPattern } from "@/utils";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/(auth)/login")({
  component: Login,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      });
    }
  },
});

function Login() {
  const [show, setShow] = useBoolean();
  const { loginMutation, error, resetError } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccessToken>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<AccessToken> = async (data) => {
    if (isSubmitting) return;

    resetError();

    try {
      await loginMutation.mutateAsync(data);
    } catch {
      // error is handled by useAuth hook
    }
  };

  return (
    <>
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
        <Fieldset.Root id="username" invalid={!!errors.username || !!error}>
          <Input
            id="username"
            {...register("username", {
              required: "Электронная почта обязательна",
              pattern: emailPattern,
            })}
            placeholder="Электронная почта"
            type="email"
            required
          />
          {errors.username && (
            <Fieldset.ErrorText>{errors.username.message}</Fieldset.ErrorText>
          )}
        </Fieldset.Root>
        <Fieldset.Root id="password" invalid={!!error}>
          <InputGroup
            flex="1"
            endElement={
              <IconButton
                variant="ghost"
                onClick={setShow.toggle}
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </IconButton>
            }
          >
            <Input
              {...register("password", {
                required: "Пароль обязательный",
              })}
              type={show ? "text" : "password"}
              placeholder="Пароль"
              required
            />
          </InputGroup>

          {/* <ViewOffIcon /> */}
          {/* <Icon
            // as={show ? ViewOffIcon : ViewIcon}
            onClick={setShow.toggle}
            aria-label={show ? "Hide password" : "Show password"}
          > */}
          {/* {show ? <ViewOffIcon /> : <ViewIcon />} */}
          {/* </Icon> */}
          {/* <InputGroup
            flex="1"
            startElement={
              <Icon
                as={show ? ViewOffIcon : ViewIcon}
                onClick={setShow.toggle}
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Icon>
            }
          >
            <Input
              color="ui.dim"
              _hover={{
                cursor: "pointer",
              }}
            ></Input>
          </InputGroup> */}
          {error && <Fieldset.ErrorText>{error}</Fieldset.ErrorText>}
        </Fieldset.Root>
        <Link as={RouterLink} href="/recover-password" color="blue.500">
          Забыли пароль?
        </Link>
        <Button variant="solid" type="submit" loading={isSubmitting}>
          Войти
        </Button>
        <Text>
          Нет аккаунта?{" "}
          <Link as={RouterLink} href="/signup" color="blue.500">
            Зарегистрироваться
          </Link>
        </Text>
      </Container>
    </>
  );
}
