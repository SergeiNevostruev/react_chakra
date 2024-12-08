import type { ComponentType, ElementType } from "react";

import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

interface NavbarProps {
  type: string;
  addModalAs: ComponentType | ElementType;
}

const Navbar = ({ type, addModalAs }: NavbarProps) => {
  const addModal = useDisclosure();
  const AddModal = addModalAs;
  return (
    <>
      <Flex py={8} gap={4}>
        {/* TODO: Complete search functionality */}
        {/* <InputGroup w={{ base: '100%', md: 'auto' }}>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={FaSearch} color='ui.dim' />
                    </InputLeftElement>
                    <Input type='text' placeholder='Search' fontSize={{ base: 'sm', md: 'inherit' }} borderRadius='8px' />
                </InputGroup> */}
        <IconButton
          variant="outline"
          gap={1}
          fontSize={{ base: "sm", md: "inherit" }}
          onClick={addModal.onOpen}
          padding={"10px"}
        >
          <FaPlus />
          Добавить {type}
        </IconButton>
        <AddModal isOpen={addModal.open} onClose={addModal.onClose} />
      </Flex>
    </>
  );
};

export default Navbar;
