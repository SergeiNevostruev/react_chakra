import * as React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import TestTabs from "@/components/elements/Test/TestTabs";

export const Route = createLazyFileRoute("/_layout/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TestTabs />;
}
