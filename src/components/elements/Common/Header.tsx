import { Box, Flex, Image, Separator } from "@chakra-ui/react";
import Logo from "@/assets/fastapi-logo.svg";

const Header = () => {
  return (
    <Box as={"footer"}>
      <Flex gap="4" justify="flex-start">
        <Image src={Logo} alt="Logo" w="180px" maxW="2xs" p={6} />
      </Flex>
      <Separator />
    </Box>
  );
};

export default Header;
