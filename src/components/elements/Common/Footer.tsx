import { Box, Center, Separator } from "@chakra-ui/react";

const Footer = ({ ...props }) => (
  <Box>
    <Separator />
    <Center {...props} color="fg.muted" marginTop={2}>
      © 2024 - {new Date().getFullYear()}, Nevostruev.team
    </Center>
  </Box>
);

export default Footer;
