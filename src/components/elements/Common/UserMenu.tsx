import {
  Box,
  IconButton,
  // Menu,
  // MenuButton,
  // MenuItem,
  // MenuList,
} from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { RiGovernmentLine } from "react-icons/ri";
import { FiLogOut, FiUser } from "react-icons/fi";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

import useAuth from "@/hooks/useAuth";

const UserMenu = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <>
      {/* Desktop */}
      <Box
        display={{ base: "none", md: "block" }}
        position="fixed"
        top={4}
        right={4}
        as={"nav"}
      >
        <MenuRoot>
          <MenuTrigger
            asChild
            aria-label="Options"
            bg="ui.main"
            // isRound
            data-testid="user-menu"
          >
            <IconButton>
              <RiGovernmentLine color="white" fontSize="18px" />
            </IconButton>
          </MenuTrigger>
          <MenuContent>
            <MenuItem asChild value="My profile">
              <Link to={"/"}>
                <FiUser fontSize="18px" />
                Домой
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleLogout}
              color="ui.danger"
              fontWeight="bold"
              value="Log out"
            >
              <FiLogOut fontSize="18px" />
              Выйти
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </Box>
    </>
  );
};

export default UserMenu;
