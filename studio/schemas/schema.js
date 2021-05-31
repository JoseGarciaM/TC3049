import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import match from './documents/match'
import player from './documents/player'
import quiz from './documents/quiz'
import answer from './objects/answer'
import choice from './objects/choice'
import question from './objects/question'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([match, player, quiz, answer, choice, question])
})
