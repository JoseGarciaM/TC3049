# Knowledge Rally: A Kahoot-style real-time quiz game made by COVID Games

Knowledge Rally is a real-time quiz game powered by Vercel and Sanity.

## Play Knowledge Rally

Knowledge Rally comes with the following routes:

- Participants can join the game on https://tc-3049.vercel.app
- You manage the quizzes on https://tc-3049.vercel.app/studio
- You start games on https://tc-3049.vercel.app/studio/quiz-match
- The serverless functions will run on https://tc-3049.vercel.app/api/function-name

### Create and edit quizzes

To make a new quiz, go to your Sanity Studio Dashboard, click “Quiz” and creat new. Give it a name, description, and some questions with multiple choice answers. The time limit will default to 20 seconds, but you can override it. You can also add an image.

### Create a new match

To launch a new game, click _Match_ (`/studio/desk/match`) and create new. The slug will be created automatically, and you can select from all your published quizes. When you have selected a quiz, publish the match.

Now you can click the **Let’s play** button in the studio’s top bar. Here you get an overview over all published and ongoing matches. Select the one you just published to initiate the host screen.

The host screen will show a QR code. Your players can join by scanning this QR code by going to where your Knowledge Rally instance is deployed (https://tc-3049.vercel.app), allow camera access, and scan the QR-code. If they aren't able to scan the QR code, they can go to https://tc-3049.vercel.app/match/the-game-slug to join.

The host controls the game play from the “Let’s play” tool in the studio.