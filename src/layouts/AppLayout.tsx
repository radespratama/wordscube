import React, { ReactNode } from "react";
import Header from "@component/Header";
import Footer from "@component/Footer";

interface AppLayoutProps {
  children: ReactNode;
  isHeader?: boolean;
}

export default function AppLayout({ children, isHeader }: AppLayoutProps) {
  return (
    <>
      <Header isHeader={isHeader} />
      <main className="flex-wrap flex-grow px-2">{children}</main>
      <Footer />
    </>
  );
}
