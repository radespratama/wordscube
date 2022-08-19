/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import tags from './tags';
import post from './post';
import author from './author';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, author, tags, blockContent]),
});
