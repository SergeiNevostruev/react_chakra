import useAuth from "@/hooks/useAuth";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Box, Container, Text } from "@chakra-ui/react";
import { EmptyState } from "@/components/ui/empty-state";
import { FiCpu } from "react-icons/fi";

export const Route = createLazyFileRoute("/_layout/")({
  component: Dashboard,
});

function Dashboard() {
  const { user: currentUser } = useAuth();

  return (
    <>
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Text fontSize="2xl">
            Привет, {currentUser?.full_name || currentUser?.email} 👋🏼
          </Text>
          <Text>С возвращением, рады видеть тебя!</Text>
        </Box>
        <EmptyState
          icon={<FiCpu />}
          title="Статистика и дашборды"
          description="Здесь может быть активность использования различных сервисов и статистика по пользователям"
        />
      </Container>
    </>
  );
}
