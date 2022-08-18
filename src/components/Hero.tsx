import Link from "next/link";
import React from "react";

import Images from "./Image";
import { A } from "./NavLink";

export default function Intro() {
  return (
    <article className="flex flex-col items-center justify-center min-h-screen">
      <Images
        size="h-[120px] w-[120px]"
        optional="shadow-sky-500/20 border-4 border-t-gray-900 border-r-sky-500 border-b-sky-500 border-l-gray-900 rounded-full"
        src={`${process.env.NEXT_PUBLIC_IMG_RESOURCE}/56097757`}
        className="rounded-full"
      />
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-white">
        Putu Rades Pratama
      </h1>
      <p className="text-lg md:text-xl text-gray-600">
        Junior Software Developer
      </p>

      <div className="mx-auto text-center space-y-4 max-w-[500px] my-7">
        <p className="text-base lg:text-lg text-gray-400">
          Let&apos;s start living like no one can help us in any event, so that
          when we are helped in certain times, it becomes a plus in itself.
        </p>
        <p className="text-base lg:text-lg text-gray-400">
          Let&apos;s talk over on{" "}
          <A
            className="title-mark text-white underline px-[2px]"
            href="https://github.com/radespratama/radespratama/discussions/1"
          >
            here
          </A>{" "}
          or{" "}
          <A
            className="title-mark text-white underline px-[2px]"
            href="https://www.instagram.com/radespratamaa"
          >
            Instagram.
          </A>
        </p>
      </div>
      <div className="flex items-center justify-center mt-2 gap-2">
        <A
          className="border-t border-gray-700 bg-gray-800 rounded-lg text-gray-50 font-semibold uppercase text-xs px-6 py-3"
          href="/blogs"
        >
          Read my notes
        </A>
      </div>
    </article>
  );
}
