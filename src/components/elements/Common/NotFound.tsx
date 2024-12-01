import { Button, Container, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

// const ButtonLink = chakra(Link);
// ButtonLink.displayName = "ButtonLink";

const NotFound = () => {
  return (
    <>
      <Container
        h="100vh"
        alignItems="stretch"
        justifyContent="center"
        textAlign="center"
        maxW="sm"
        centerContent
      >
        <Text
          fontSize="8xl"
          color="ui.main"
          fontWeight="bold"
          lineHeight="1"
          mb={4}
        >
          404
        </Text>
        <Text fontSize="md">Упс!</Text>
        <Text fontSize="md">Такой страницы не существует!</Text>
        <Button
          asChild
          color="ui.main"
          borderColor="ui.main"
          variant="outline"
          mt={4}
        >
          <Link to="/">Go back</Link>
        </Button>
      </Container>
    </>
  );
};

export default NotFound;
