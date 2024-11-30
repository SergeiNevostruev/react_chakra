import { ColorModeButton } from "@/components/ui/color-mode";
import { Stack, Text } from "@chakra-ui/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
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
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
