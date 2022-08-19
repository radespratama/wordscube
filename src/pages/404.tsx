import { Door } from "phosphor-react";

import AppLayout from "@layout/AppLayout";
import MetaTags from "@component/MetaTags";
import { A } from "@component/NavLink";

export default function NotFoundPage() {
  return (
    <>
      <MetaTags title="Oops, your destination not found! - Wordscube" />
      <AppLayout>
        <article className="max-w-screen-xs mx-auto flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-base md:text-lg lg:text-3xl tracking-tight">
            <span className="font-bold">404</span> | Oops, your destination not
            found!
          </h1>

          <A
            href="/"
            className="mt-6 text-base underline underline-offset-8 flex items-center text-gray-700 dark:text-gray-400"
          >
            <Door size={20} className="mr-1" /> Back to home
          </A>
        </article>
      </AppLayout>
    </>
  );
}
