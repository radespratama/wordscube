import React from "react";
import Dynamic from "next/dynamic";
import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";

import AppLayout from "@layout/AppLayout";

import MetaTags from "@component/MetaTags";
import Intro from "@component/Notespage/Intro";
const Switcher = Dynamic(() => import("@component/Switcher"));

import { sanityClient } from "@lib/config/sanity.config";
import { queryFetchPost } from "@lib/query";
import { Note } from "@lib/types/typing";
import NoteList from "@component/Notespage/NoteList";

interface Props {
  response: [Note];
}

const Notes: NextPage<Props> = ({ response }) => {
  const { asPath } = useRouter();
  return (
    <>
      <MetaTags
        title="Wordscube - My Developet notes"
        description="This is where I share my writings on programming, tutorials, and my experiences."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
      />
      <AppLayout isFooter>
        <Intro />
        <article className="min-h-screen">
          {response ? (
            <NoteList response={response} />
          ) : (
            <div className="max-w-screen-lg mx-auto px-2">
              <h3 className="tracking-tight font-medium text-base text-center">
                Oops, Article not found 🗿
              </h3>
            </div>
          )}
        </article>
      </AppLayout>
      <Switcher />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const response = await sanityClient.fetch(queryFetchPost);

  return {
    props: {
      response,
    },
  };
};
export default Notes;
