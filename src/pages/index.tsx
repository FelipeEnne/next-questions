import { useEffect, useState } from "react";
import Questionary from "../../components/Questionary";
import AnswersModel from "../../model/answer";
import QuestionModel from "../../model/question";
import { useRouter } from "next/router";

const questionTest = new QuestionModel(
  1,
  "Qual é a função principal do Next.js?",
  [
    AnswersModel.wrong("Criar apenas APIs REST"),
    AnswersModel.wrong("Framework de CSS para React"),
    AnswersModel.wrong("Ferramenta de versionamento de código"),
    AnswersModel.wrong("Biblioteca de animações para JavaScript"),
    AnswersModel.correct("Framework React para aplicações web com SSR/SSG"),
  ],
);

const BASE_URL = "next-questions-eight.vercel.app/api";

export default function Home() {
  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>(questionTest);
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  async function loadQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/questionnaire`);
    const questionsIds = await resp.json();
    setQuestionsIds(questionsIds);
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.createUsingObj(json);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    if (questionsIds.length > 0) {
      loadQuestion(questionsIds[0]);
    }
  }, [questionsIds]);

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered);
    const right = questionAnswered.right;
    setRightAnswers(rightAnswers + (right ? 1 : 0));
  }

  function idNextQuestion() {
    const nextIndex = questionsIds.indexOf(question.id) + 1;
    return questionsIds[nextIndex];
  }

  function goToNextStep() {
    const nextId = idNextQuestion();
    if (nextId) {
      toNextQuestion(nextId);
    } else {
      finish();
    }
  }

  function toNextQuestion(nextId: number) {
    loadQuestion(nextId);
  }

  function finish() {
    router.push({
      pathname: "/result",
      query: {
        total: questionsIds.length,
        right: rightAnswers,
      },
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {question ? (
        <Questionary
          question={question}
          last={idNextQuestion() === undefined}
          questionAnswered={questionAnswered}
          goToNextStep={goToNextStep}
        />
      ) : (
        false
      )}
    </div>
  );
}
