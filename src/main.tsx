import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import App from "./App.tsx";
import { Provider } from "@/components/ui/provider.tsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { client } from "./client/sdk.gen";

client.setConfig({
  // baseURL: import.meta.env.BACKEND_HOST,
  baseUrl: "https://petstore.swagger.io/v2",
});

// Create a new router instance
const router = createRouter({ routeTree });
const queryClient = new QueryClient();

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  );
}
