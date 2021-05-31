export default {
  localWebHost: 'http://localhost:3000',
  localApiHost: 'http://localhost:3000',
  remoteWebHost: '<your-app-name>.now.sh',
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
