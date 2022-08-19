import React from "react";

import Images from "./Image";
import { A } from "./NavLink";

export default function Intro() {
  return (
    <article className="flex flex-col items-center justify-center min-h-screen">
      <Images
        size="h-[120px] w-[120px]"
        optional="shadow-sky-500/20 border-4 border-t-gray-950 border-r-sky-500 border-b-sky-500 border-l-gray-950 rounded-full"
        src={`${process.env.NEXT_PUBLIC_IMG_RESOURCE}`}
        className="rounded-full"
      />
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-gray-950 dark:text-white">
        Putu Rades Pratama
      </h1>
      <p className="text-lg md:text-xl text-gray-600">
        Junior Software Developer
      </p>

      <div className="mx-auto text-center space-y-4 max-w-[500px] my-5">
        <p className="text-base lg:text-lg text-gray-400">
          Let&apos;s start living like no one can help us in any event, so that
          when we are helped in certain times, it becomes a plus in itself.
        </p>
        <p className="text-base lg:text-lg text-gray-400">
          Let&apos;s talk over on{" "}
          <A
            className="title-mark text-gray-500 dark:text-white underline px-[2px]"
            href={`${process.env.INFO_CHAT_URL}`}
            target="_blank"
          >
            here
          </A>{" "}
          or{" "}
          <A
            className="title-mark text-gray-500 dark:text-white underline px-[2px]"
            href={`${process.env.INFO_INSTAGRAM_URL}`}
            target="_blank"
          >
            Instagram.
          </A>
        </p>
      </div>
      <div className="flex items-center justify-center mt-2 gap-2">
        <A
          className="border-t border-gray-700 bg-gray-800 rounded-lg text-gray-50 font-semibold uppercase text-xs px-6 py-3"
          href="/notes"
        >
          Read my notes
        </A>
      </div>
    </article>
  );
}
