"use client";
import {
  Box,
  Flex,
  Image,
  SegmentGroupValueChangeDetails,
  Separator,
} from "@chakra-ui/react";
import Logo from "@/assets/logo.svg";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { toaster } from "@/components/ui/toaster";

const Header = () => {
  const items = [
    "Общие настройки",
    "BI",
    "DWH",
    "AI",
    "Быстрые таблицы",
    "Формы ввода",
    "Работа с шаблонами",
    "Интеграции",
  ];

  // const toaster = useCustomToast();

  const valueChange = (details: SegmentGroupValueChangeDetails) => {
    toaster.create({
      description: `Перключился на ${details.value}`,
      type: "info",
    });
  };

  return (
    <Box as={"header"}>
      <Flex gap="4" justify="flex-start" alignItems={"center"}>
        <Image src={Logo} alt="Logo" w="280px" maxW="2xs" p={6} />
        <SegmentedControl
          size={"sm"}
          defaultValue={items[0]}
          items={items}
          onValueChange={valueChange}
        />
      </Flex>
      <Separator />
    </Box>
  );
};

export default Header;
