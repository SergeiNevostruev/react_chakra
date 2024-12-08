import {
  // Button,
  Container,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import DeleteConfirmation from "./DeleteConfirmation";
import { Button } from "@/components/ui/button";

const DeleteAccount = () => {
  const confirmationModal = useDisclosure();

  return (
    <>
      <Container maxW="full">
        <Heading size="sm" py={4}>
          Delete Account
        </Heading>
        <Text>
          Permanently delete your data and everything associated with your
          account.
        </Text>
        <Button
          variant="surface"
          mt={4}
          onClick={confirmationModal.onOpen}
          background={"red.500"}
          color={"white"}
        >
          Delete
        </Button>
        <DeleteConfirmation
          isOpen={confirmationModal.open}
          onClose={confirmationModal.onClose}
        />
      </Container>
    </>
  );
};
export default DeleteAccount;
