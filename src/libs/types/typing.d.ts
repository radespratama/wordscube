export interface Note {
  _id: string;
  title: string;
  shortDescription: string;
  slug: {
    current: string;
  };
  author: {
    name: string;
    image: string;
  };
  tags: string[];
  body: [object];
  mainImage: string;
  publishedAt: string;
}

export interface MiniNoteCard {
  title: string;
  shortDescription: string;
  slug: {
    current: string;
  };
  publishedAt: string;
}
