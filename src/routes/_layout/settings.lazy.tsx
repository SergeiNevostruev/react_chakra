import { createLazyFileRoute } from "@tanstack/react-router";
import { Container, Heading, Tabs } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";

import type { UserPublic } from "@/client";
import UserInformation from "@/components/elements/UserSettings/UserInformation";
import ChangePassword from "@/components/elements/UserSettings/ChangePassword";
import Appearance from "@/components/elements/UserSettings/Appearance";
import DeleteAccount from "@/components/elements/UserSettings/DeleteAccount";

const tabsConfig = [
  {
    title: "My profile",
    component: UserInformation,
  },
  {
    title: "Password",
    component: ChangePassword,
  },
  {
    title: "Appearance",
    component: Appearance,
  },
  {
    title: "Danger zone",
    component: DeleteAccount,
  },
];

export const Route = createLazyFileRoute("/_layout/settings")({
  component: UserSettings,
});

function UserSettings() {
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"]);
  const finalTabs = currentUser?.is_superuser
    ? tabsConfig.slice(0, 3)
    : tabsConfig;

  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} py={12}>
        User Settings
      </Heading>
      <Tabs.Root variant="enclosed">
        <Tabs.List>
          {finalTabs.map((tab, index) => (
            <Tabs.Trigger key={index} value={tab.title}>
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {/* <TabPanels> */}
        {finalTabs.map((tab, index) => (
          <Tabs.Content value={tab.title} key={index}>
            <tab.component />
          </Tabs.Content>
        ))}
        {/* </TabPanels> */}
      </Tabs.Root>
    </Container>
  );
}
