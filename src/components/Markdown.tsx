import React from "react";
import PortableText from "react-portable-text";
import { A } from "./NavLink";

export default function Markdown({ content }: any) {
  return (
    <>
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={content}
        className="prose-base texts lg:prose-lg text-justify"
        serializers={{
          link: ({ href, children }: any) => (
            <A
              href={href}
              className="text-sky-500 cursor-pointer underline hover:no-underline"
              target="_blank"
            >
              {children}
            </A>
          ),
          normal: ({ children }: any) => (
            <p className="text-lg leading-normal text-gray-900 dark:text-white">
              {children}
            </p>
          ),
        }}
      />
    </>
  );
}
