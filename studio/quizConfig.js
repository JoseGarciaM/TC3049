export default {
  localWebHost: 'http://localhost:3000',
  localApiHost: 'http://localhost:3000',
  remoteWebHost: 'https://tc-3049.vercel.app',
  match: {
    correctAnswerScore: 100,
    firstAnswerScore: 50
  },
  schema: {
    maxAnswerLength: 40,
    maxQuestionLength: 100,
    maxNumberOfChoices: 4,
    minNumberOfChoices: 2,
    defaultTimeLimit: 30
  }
}
