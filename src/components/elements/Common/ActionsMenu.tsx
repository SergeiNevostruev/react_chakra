import {
  Button,
  // Menu,
  // MenuButton,
  // MenuItem,
  // MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit, FiTrash } from "react-icons/fi";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

import type { ItemPublic, UserPublic } from "@/client";
import EditItem from "../Items/EditItem";
import Delete from "./DeleteAlert";
import EditUser from "../Admin/EditUser";
// import EditUser from "../Admin/EditUser";
// import EditItem from "../Items/EditItem";
// import Delete from "./DeleteAlert";

interface ActionsMenuProps {
  type: string;
  value: ItemPublic | UserPublic;
  disabled?: boolean;
}

const ActionsMenu = ({ type, value, disabled }: ActionsMenuProps) => {
  const editUserModal = useDisclosure();
  const deleteModal = useDisclosure();

  return (
    <>
      <MenuRoot>
        <MenuTrigger disabled={disabled} asChild>
          <Button variant="ghost">
            <BsThreeDotsVertical />
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="edit" onClick={editUserModal.onOpen}>
            <FiEdit fontSize="16px" /> Изменить {type}
          </MenuItem>
          <MenuItem
            value="delete"
            onClick={deleteModal.onOpen}
            color="ui.danger"
          >
            <FiTrash fontSize="16px" /> Удалить {type}
          </MenuItem>
        </MenuContent>
        {type === "User" ? (
          <EditUser
            user={value as UserPublic}
            isOpen={editUserModal.open}
            onClose={editUserModal.onClose}
          />
        ) : (
          <EditItem
            item={value as ItemPublic}
            isOpen={editUserModal.open}
            onClose={editUserModal.onClose}
          />
        )}
        <Delete
          type={type}
          id={value.id}
          isOpen={deleteModal.open}
          onClose={deleteModal.onClose}
        />
      </MenuRoot>
    </>
  );
};

export default ActionsMenu;
