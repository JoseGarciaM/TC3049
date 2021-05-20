import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from './blockContent';
import questions from './questions';


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    questions,
    blockContent,
  ]),
});
