import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CoreSoft Solutions — Innovation for every business." },
      {
        name: "description",
        content:
          "Premium websites, Google ranking and digital audits for restaurants, clinics and salons. 7-day delivery. Hisar, Haryana.",
      },
      { property: "og:title", content: "CoreSoft Solutions — Innovation for every business." },
      { name: "twitter:title", content: "CoreSoft Solutions — Innovation for every business." },
      { name: "description", content: "CoreSoft Digital Ascent is a high-converting landing page for digital business solutions." },
      { property: "og:description", content: "CoreSoft Digital Ascent is a high-converting landing page for digital business solutions." },
      { name: "twitter:description", content: "CoreSoft Digital Ascent is a high-converting landing page for digital business solutions." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4cf1a154-b658-4324-a87f-a409b4042c64/id-preview-7b71354f--a836bd86-6fad-4683-ba8f-8122e18a956b.lovable.app-1776606927398.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4cf1a154-b658-4324-a87f-a409b4042c64/id-preview-7b71354f--a836bd86-6fad-4683-ba8f-8122e18a956b.lovable.app-1776606927398.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
