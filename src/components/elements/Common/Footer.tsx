import { toaster } from "@/components/ui/toaster";
import { Box, Center, HStack, Separator } from "@chakra-ui/react";
import { FiMic } from "react-icons/fi";
import DialogFull from "./DialogFull";

const Footer = ({ ...props }) => {
  const contactToast = () => {
    return () => {
      toaster.create({
        title: "Задай вопрос разработчику",
        description: (
          <HStack>
            <FiMic display={"inline"} />
            "Nevostruev.team"
          </HStack>
        ),
        duration: 1000,
      });
    };
  };

  return (
    <Box as={"footer"} {...props}>
      <Separator />
      <Center
        color="fg.muted"
        marginTop={2}
        _hover={{ textDecoration: "underline", cursor: "button" }}
      >
        <HStack>
          <Box onClick={contactToast()}>
            © 2024 - {new Date().getFullYear()}, Nevostruev.team
          </Box>
          {/* <Box marginLeft={20}>Пользовательское соглашение</Box> */}
          <DialogFull
            buttonEl={<Box marginLeft={20}>Пользовательское соглашение</Box>}
            title={"Пользовательское соглашение"}
            activeOk={undefined}
            activeCancel={undefined}
          >
            <p>Здесь должно быть пользовательское соглашение</p>
          </DialogFull>
        </HStack>
      </Center>
    </Box>
  );
};

export default Footer;
