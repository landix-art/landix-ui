import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Guides",
    template: "%s | Landix Guides",
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
