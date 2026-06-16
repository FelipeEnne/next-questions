# Quiz Next.js

A multiple-choice quiz about **Next.js** concepts, built as a course project. It uses the **Pages Router** with in-memory API routes.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # Production build
npm run start   # Production server
npm run lint    # ESLint
```

## Project structure

```
quiz/
├── components/          # React components
├── model/               # Domain classes (Question, Answer)
├── functions/           # Utilities (shuffle)
├── src/
│   ├── pages/           # Pages and API routes
│   └── styles/          # CSS Modules
└── public/              # Static assets
```

## API

| Endpoint | Description |
|----------|-------------|
| `GET /api/questionnaire` | Returns `number[]` with question IDs in shuffled order |
| `GET /api/questions/[id]` | Returns the question object with shuffled answers |

Files: `src/pages/api/questionnaire/index.ts` and `src/pages/api/questions/[id].ts`.

## Quiz flow

1. The home page (`src/pages/index.tsx`) fetches the question order and loads the first one.
2. The user answers within the time limit (20 seconds), or the timer reveals the correct answer as a wrong attempt.
3. **Next** advances; on the last question, **Finish** ends the quiz.
4. Results appear at `/result?total=N&right=M` with score statistics.

## Stack

- Next.js 15 (Pages Router)
- React 19
- TypeScript 5
- CSS Modules
- react-countdown-circle-timer
