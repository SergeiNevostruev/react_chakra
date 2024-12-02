import { Flex, Image, Separator } from "@chakra-ui/react";
import Logo from "@/assets/fastapi-logo.svg";

const Header = () => {
  return (
    <>
      <Flex gap="4" justify="flex-start">
        <Image src={Logo} alt="Logo" w="180px" maxW="2xs" p={6} />
      </Flex>
      <Separator />
    </>
  );
};

export default Header;
