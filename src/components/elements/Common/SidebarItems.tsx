import { Box, Flex, Text, useToken } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  FiBriefcase,
  FiHome,
  FiSettings,
  FiUsers,
  FiBook,
  FiAirplay,
  FiActivity,
} from "react-icons/fi";

import type { UserPublic } from "@/client";

const items = [
  { icon: <FiHome />, title: "Дашборд", path: "/" },
  { icon: <FiBook />, title: "Проекты", path: "/project" },
  { icon: <FiAirplay />, title: "Приложения", path: "/apps" },
  { icon: <FiBriefcase />, title: "Тест", path: "/test" },
  { icon: <FiActivity />, title: "Пункты", path: "/items" },
  { icon: <FiSettings />, title: "Настройки", path: "/settings" },
];

interface SidebarItemsProps {
  onClose?: () => void;
}

const SidebarItems = ({ onClose }: SidebarItemsProps) => {
  const queryClient = useQueryClient();
  const [cyan] = useToken("colors", ["cyan"]);
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"]);

  const finalItems = currentUser?.is_superuser
    ? [
        ...items,
        { icon: <FiUsers />, title: "Администрирование", path: "/admin" },
      ]
    : items;

  const listItems = finalItems.map(({ icon, title, path }) => (
    <Flex asChild w="100%" p={2} key={title} onClick={onClose}>
      <Link
        to={path}
        activeProps={{
          style: {
            borderRadius: "12px",
            background: cyan,
          },
        }}
      >
        <Box asChild alignSelf={"center"}>
          {icon}
        </Box>
        <Text ml={2}>{title}</Text>
      </Link>
    </Flex>
  ));

  return (
    <>
      <Box>{listItems}</Box>
    </>
  );
};

export default SidebarItems;
