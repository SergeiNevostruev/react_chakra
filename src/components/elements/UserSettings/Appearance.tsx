import { ColorModeButton } from "@/components/ui/color-mode";
import { Container, Heading } from "@chakra-ui/react";

const Appearance = () => {
  return (
    <>
      <Container maxW="full">
        <Heading size="sm" py={4}>
          Appearance
        </Heading>
        <ColorModeButton />
      </Container>
    </>
  );
};
export default Appearance;
