import * as React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ColorModeButton } from "@/components/ui/color-mode";

export const Route = createLazyFileRoute("/_layout/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_layout/settings"! <ColorModeButton />
    </div>
  );
}
