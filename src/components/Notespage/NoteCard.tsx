import React from "react";

import { A } from "@component/NavLink";
import { CircleIcon } from "@component/Icon";

import { getDateWithDayAndYear } from "@lib/utils/getDate";
import { MiniNoteCard } from "@lib/types/typing";

export default function NoteCard({
  title,
  slug,
  shortDescription,
  publishedAt,
}: MiniNoteCard) {
  return (
    <div className="flex lg:gap-x-6">
      <div className="w-2/12 hidden lg:block">
        <span className="block text-base font-medium text-gray-400 dark:text-white -mt-1.5 text-right pr-4">
          {getDateWithDayAndYear(publishedAt) || "-"}
        </span>
      </div>
      <div className="hidden md:flex flex-col items-center">
        <CircleIcon stroke="stroke-white" />
        <span className="bg-gray-400 dark:bg-gray-800 h-full w-px" />
      </div>
      <div className="w-full lg:w-11/12">
        <A href={`/notes/${slug.current}`} className="blogs-content-card">
          <span className="block lg:hidden text-gray-800 dark:text-white -mt-0.5 text-sm font-medium">
            {getDateWithDayAndYear(publishedAt) || "-"}
          </span>
          <h3 className="text-xl lg:text-2xl text-gray-800 dark:text-white font-semibold mb-3 tracking-tight lg:leading-none">
            {title || "-"}
          </h3>
          <p className="leading-relaxed text-gray-400 line-clamp-2 mb-3">
            {shortDescription || "-"}
          </p>
          <span className="font-medium mt-2 underline text-gray-800 dark:text-white">
            Read more
            <span className="sr-only">{title || "-"}</span>
          </span>
        </A>
      </div>
    </div>
  );
}
