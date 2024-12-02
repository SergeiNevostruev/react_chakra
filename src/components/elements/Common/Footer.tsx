import { Box, Center, Separator } from "@chakra-ui/react";

const Footer = ({ ...props }) => (
  <Box as={"footer"} {...props}>
    <Separator />
    <Center
      color="fg.muted"
      marginTop={2}
      _hover={{ textDecoration: "underline" }}
    >
      © 2024 - {new Date().getFullYear()}, Nevostruev.team
    </Center>
  </Box>
);

export default Footer;
