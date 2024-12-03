import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/admin")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_layout/admin"! </div>;
}
