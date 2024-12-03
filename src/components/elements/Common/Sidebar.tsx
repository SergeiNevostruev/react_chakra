import { Box, Flex, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { FiLogOut, FiMenu } from "react-icons/fi";

import type { UserPublic } from "@/client";
import useAuth from "@/hooks/useAuth";
import SidebarItems from "./SidebarItems";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
} from "@/components/ui/drawer";

const Sidebar = () => {
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"]);
  const { open, onOpen, onClose } = useDisclosure();
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <>
      {/* Mobile */}
      <IconButton
        onClick={onOpen}
        display={{ base: "flex", md: "none" }}
        aria-label="Open Menu"
        position="absolute"
        fontSize="20px"
        m={4}
      >
        <FiMenu />
      </IconButton>
      <DrawerRoot open={open} placement="start" onOpenChange={onClose}>
        {/* <DrawerOverlay /> */}
        <DrawerBackdrop />
        <DrawerContent maxW="250px">
          <DrawerCloseTrigger />
          <DrawerBody py={8}>
            <Flex flexDir="column" justify="space-between">
              <Box>
                <SidebarItems onClose={onClose} />
                <Flex
                  as="button"
                  onClick={handleLogout}
                  p={2}
                  color="ui.danger"
                  fontWeight="bold"
                  alignItems="center"
                >
                  <FiLogOut />
                  <Text ml={2}>Выйти</Text>
                </Flex>
              </Box>
              {currentUser?.email && (
                <Text lineClamp={2} fontSize="sm" p={2}>
                  Вход под пользователем: {currentUser.email}
                </Text>
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>

      {/* Desktop */}
      <Box
        p={3}
        // h="100vh"
        position="sticky"
        top="0"
        display={{ base: "none", md: "flex" }}
      >
        <Flex flexDir="column" justify="space-between" p={4} borderRadius={12}>
          <Box>
            <SidebarItems />
          </Box>
          {currentUser?.email && (
            <Text lineClamp={2} fontSize="sm" p={2} maxW="180px">
              Вход под пользователем: {currentUser.email}
            </Text>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
