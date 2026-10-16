import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function Page({
  title,
  subtitle,
  children,
  breadcrumbs = true,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  breadcrumbs?: boolean;
}) {
  return (
    <div className="wrap py-6">
      {breadcrumbs && (
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="text-foreground">{title}</span>
        </div>
      )}

      <div className="mx-auto max-w-4xl py-4">
        <h1 className="text-3xl font-bold text-navy dark:text-white md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
        <div className="gold-rule my-5 w-36" />
        <div className="space-y-4 leading-relaxed text-foreground/85 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy dark:[&_h2]:text-white [&_p]:text-sm sm:[&_p]:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} — Angadi` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — Angadi` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ],
});
