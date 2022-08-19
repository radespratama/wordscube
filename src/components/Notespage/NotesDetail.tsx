import React from "react";
import { ArrowLeft } from "phosphor-react";

import Markdown from "@component/Markdown";
import { A } from "@component/NavLink";
import Images from "@component/Image";

import { Note } from "@lib/types/typing";
import { urlFor } from "@lib/config/sanity.config";
import { getDateWithDayAndYear } from "@lib/utils/getDate";

interface Props {
  notes: Note;
}

export default function NotesDetail({ notes }: Props) {
  const { author, body, title, tags, publishedAt, mainImage } = notes;
  return (
    <article className="py-3 min-h-screen">
      <A
        href="/notes"
        className="inline-flex items-center hover:underline underline-offset-4 text-gray-950 dark:text-white"
      >
        <ArrowLeft size={14} className="mr-1" />
        Back to notes
      </A>
      <section className="pt-8 pb-6">
        <h1 className="pt-2 text-3xl md:text-4xl lg:text-5xl leading-tight font-bold tracking-tight mb-3 xs:mb-2">
          {title}
        </h1>
        <div
          className="inline-flex items-center space-x-2 
          text-sm sm:text-base tracking-tight font-normal text-gray-500 mt-2 sm:mt-3 mb-5"
        >
          <Images
            size="h-8 w-8"
            src={urlFor(author.image).url()}
            className="rounded-full"
            alt={author.name}
          />
          <p>{author.name}</p>
          <span>|</span>
          <span>{getDateWithDayAndYear(publishedAt)}</span>
        </div>
        <div className="pb-5 md:pb-7 space-x-2">
          {tags.map((note: any) => (
            <span
              className="bg-emerald-400 px-2 py-1 text-sm font-medium cursor-default rounded-md text-gray-800"
              key={note.title}
            >
              {note.title}
            </span>
          ))}
        </div>
        <Images
          size="h-[300px] sm:h-[350px] md:h-[380px] lg:h-[450px] w-full rounded-xl mb-4 md:mb-6"
          src={urlFor(mainImage).url()}
          className="rounded-xl"
          alt={title}
        />
        <Markdown content={body} />
      </section>
    </article>
  );
}
