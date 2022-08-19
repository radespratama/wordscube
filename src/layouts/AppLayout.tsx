import React, { ReactNode } from "react";
import Footer from "@component/Footer";

interface AppLayoutProps {
  children: ReactNode;
  isFooter?: boolean;
}

export default function AppLayout({
  children,
  isFooter,
}: AppLayoutProps) {
  return (
    <>
      <main className="flex-wrap flex-grow px-2 max-w-screen-md mx-auto">
        {children}
      </main>
      <Footer isFooter={isFooter} />
    </>
  );
}
