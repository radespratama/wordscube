const queryFetchPost = `
  *[_type == "post"]{
    _id,
    title,
    shortDescription,
    slug {
      current
    },
    author -> {
      name,
      image
    },
    tags[] -> { title },
    body,
    mainImage,
    publishedAt
  }
`;

const queryFetchSlug = `
  *[_type == "post"]{
    _id,
    slug {
      current
    },
  }
`;

const queryDynamicPosts = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    shortDescription,
    slug,
    author -> {
      name,
      image
    },
    'comments': *[
      _type == "comment" 
      && post._ref == ^._id 
      && approved == true
    ],
    tags[] -> { title },
    body,
    mainImage,
    publishedAt
  }
`;

export { queryFetchPost, queryFetchSlug, queryDynamicPosts };
