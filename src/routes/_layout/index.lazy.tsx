import useAuth from "@/hooks/useAuth";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  const userData = useAuth();
  // console.log(userData);
  return (
    <div>
      Hello "/_layout/index"! Приветствую,{" "}
      {userData.user?.full_name || userData.user?.email}
    </div>
  );
}
