import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "App" },
      { name: "description", content: "" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="h-2 w-2 rounded-full bg-muted-foreground/20" />
    </div>
  );
}

