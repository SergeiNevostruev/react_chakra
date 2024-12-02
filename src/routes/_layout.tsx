import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import useAuth, { isLoggedIn } from "@/hooks/useAuth";
import { Flex, Separator, Spinner } from "@chakra-ui/react";
import Sidebar from "@/components/elements/Common/Sidebar";
import UserMenu from "@/components/elements/Common/UserMenu";
import Header from "@/components/elements/Common/Header";
import Footer from "@/components/elements/Common/Footer";

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function Layout() {
  const { isLoading } = useAuth();
  return (
    <Flex direction="column" h={"100vh"} display={"flex"}>
      <Header />
      <Flex as={"main"} maxW="large" h="5/6" position="relative">
        <Sidebar />
        <Separator orientation={"vertical"} />
        {isLoading ? (
          <Flex justify="center" align="center" height="100vh" width="full">
            <Spinner size="xl" color="ui.main" />
          </Flex>
        ) : (
          <Outlet />
        )}
        <UserMenu />
      </Flex>
      <Footer />
    </Flex>
  );
}
