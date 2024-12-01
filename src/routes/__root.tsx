// import { Header } from "@/components/custom-ui/Header/Header";
import NotFound from "@/components/elements/Common/NotFound";
// import { ColorModeButton } from "@/components/ui/color-mode";
// import { Box, Center, Stack, Text } from "@chakra-ui/react";
import {
  createRootRoute,
  // Link,
  Outlet,
} from "@tanstack/react-router";
import React, { Suspense } from "react";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const loadDevtools = () =>
  Promise.all([
    import("@tanstack/router-devtools"),
    import("@tanstack/react-query-devtools"),
  ]).then(([routerDevtools, reactQueryDevtools]) => {
    return {
      default: () => (
        <>
          <routerDevtools.TanStackRouterDevtools />
          <reactQueryDevtools.ReactQueryDevtools />
        </>
      ),
    };
  });

const TanStackDevtools =
  import.meta.env.VITE_APP_NODE_ENV === "production"
    ? () => null
    : React.lazy(loadDevtools);

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
});

function RootComponent() {
  return (
    <>
      {/* <Box as={"header"}>Header</Box> */}
      {/* <Header _hover={{ shadow: "md" }}>
        <Center>Header</Center>
      </Header>
      <div className="p-2 flex gap-2">
        <Stack
          direction="row"
          justifyContent={"flex-end"}
          h={10}
          marginRight={5}
        >
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/reducer", "Reducer"],
          ].map((v, i) => (
            <Link to={v[0]} key={i}>
              <Text
                color={"GrayText"}
                _hover={{ bg: "blue.100" }}
                display={"inline"}
              >
                {v[1]}
              </Text>
            </Link>
          ))}
          <ColorModeButton />
        </Stack>
      </div>
      <hr /> */}
      <Outlet />
      <Suspense>
        <TanStackDevtools />
      </Suspense>
    </>
  );
}
