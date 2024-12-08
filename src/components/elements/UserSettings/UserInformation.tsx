import {
  Box,
  // Button,
  Container,
  Fieldset,
  Flex,
  // FormControl,
  // FormErrorMessage,
  // FormLabel,
  Heading,
  Input,
  Text,
  // useColorModeValue,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type UserPublic,
  type UserUpdateMe,
  UsersService,
} from "@/client";
import useAuth from "@/hooks/useAuth";
import useCustomToast from "@/hooks/useCustomToast";
import { emailPattern, handleError } from "@/utils";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const UserInformation = () => {
  const queryClient = useQueryClient();
  // const color = useColorModeValue("inherit", "ui.light");
  const showToast = useCustomToast();
  const [editMode, setEditMode] = useState(false);
  const { user: currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<UserPublic>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      full_name: currentUser?.full_name,
      email: currentUser?.email,
    },
  });

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const mutation = useMutation({
    mutationFn: (data: UserUpdateMe) =>
      UsersService.updateUserMe({ requestBody: data }),
    onSuccess: () => {
      showToast("Success!", "User updated successfully.", "success");
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });

  const onSubmit: SubmitHandler<UserUpdateMe> = async (data) => {
    mutation.mutate(data);
  };

  const onCancel = () => {
    reset();
    toggleEditMode();
  };

  return (
    <>
      <Container maxW="full">
        <Heading size="sm" py={4}>
          User Information
        </Heading>
        <Box
          w={{ sm: "full", md: "50%" }}
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Fieldset.Root>
            <Field label="Full name">
              {editMode ? (
                <Input
                  id="name"
                  {...register("full_name", { maxLength: 30 })}
                  type="text"
                  size="md"
                  w="auto"
                />
              ) : (
                <Text
                  textStyle="md"
                  py={2}
                  color={!currentUser?.full_name ? "ui.dim" : "inherit"}
                  truncate
                  maxWidth="250px"
                >
                  {currentUser?.full_name || "N/A"}
                </Text>
              )}
            </Field>
            <Field label="Email" mt={4} invalid={!!errors.email}>
              {editMode ? (
                <Input
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: emailPattern,
                  })}
                  type="email"
                  size="md"
                  w="auto"
                />
              ) : (
                <Text textStyle="md" py={2} truncate maxWidth="250px">
                  {currentUser?.email}
                </Text>
              )}
              {errors.email && (
                <Fieldset.ErrorText>{errors.email.message}</Fieldset.ErrorText>
              )}
            </Field>
            <Flex mt={4} gap={3}>
              <Button
                variant="solid"
                onClick={toggleEditMode}
                type={editMode ? "button" : "submit"}
                loading={editMode ? isSubmitting : false}
                disabled={editMode ? !isDirty || !getValues("email") : false}
              >
                {editMode ? "Save" : "Edit"}
              </Button>
              {editMode && (
                <Button onClick={onCancel} disabled={isSubmitting}>
                  Cancel
                </Button>
              )}
            </Flex>
          </Fieldset.Root>
        </Box>
      </Container>
    </>
  );
};

export default UserInformation;
