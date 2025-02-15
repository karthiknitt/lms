import Header from "../../components/header";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="min h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </ClerkProvider>
  );
}
