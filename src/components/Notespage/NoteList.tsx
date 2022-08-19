import { useState, useEffect } from "react";

import NoteCard from "./NoteCard";
import { NoteCardSkeleton } from "@component/Skeleton";
import { Note } from "@lib/types/typing";

interface Props {
  response: [Note];
}
export default function NoteList({ response }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (response) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    return () => clearTimeout();
  }, [response]);

  const skeletonContent = Array(4).fill("");

  return (
    <section className="max-w-screen-md mx-auto">
      {loading ? (
        skeletonContent.map((index) => (
          <NoteCardSkeleton key={`${index}-${Math.random()}`} />
        ))
      ) : (
        <>
          {response?.map((note) => {
            const { title, slug, shortDescription, publishedAt } = note;
            return (
              <NoteCard
                title={title}
                shortDescription={shortDescription}
                slug={slug}
                publishedAt={publishedAt}
                key={note._id}
              />
            );
          })}
        </>
      )}
    </section>
  );
}
