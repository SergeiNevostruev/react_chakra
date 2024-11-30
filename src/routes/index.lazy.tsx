import Demo from "@/components/elements/demo/Demo";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 header">
      <h3>Welcome Home!</h3>
      <Demo />
    </div>
  );
}
