import Demo from "@/components/elements/demo/Demo";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(demo)/")({
  component: () => <div></div>,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Demo />
    </div>
  );
}
