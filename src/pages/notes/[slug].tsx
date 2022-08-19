import React from "react";
import Dynamic from "next/dynamic";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import AppLayout from "@layout/AppLayout";
import { sanityClient, urlFor } from "@lib/config/sanity.config";
import { queryFetchSlug, queryDynamicPosts } from "@lib/query";
import { Note } from "@lib/types/typing";

import MetaTags from "@component/MetaTags";
const NotesDetail = Dynamic(() => import("@component/Notespage/NotesDetail"));
const Switcher = Dynamic(() => import("@component/Switcher"));

interface Props {
  notes: Note;
}

const DetailNotes: NextPage<Props> = ({ notes }) => {
  return (
    <>
      <MetaTags
        title={`Wordscube - ${notes?.title}`}
        description={notes.shortDescription}
        image={urlFor(notes.mainImage).url()}
      />
      <AppLayout isFooter>
        <NotesDetail notes={notes} />
      </AppLayout>
      <Switcher />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = await sanityClient.fetch(queryFetchSlug);

  const paths = notes.map((note: { slug: { current: string } }) => ({
    params: { slug: note.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const notes = await sanityClient.fetch(queryDynamicPosts, {
    slug: params?.slug,
  });

  if (!notes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      notes,
    },
  };
};

export default DetailNotes;
