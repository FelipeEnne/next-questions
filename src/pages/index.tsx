import { useEffect, useState } from "react";
import Questionary from "../../components/Questionary";
import AnswersModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questionTest = new QuestionModel(
  1,
  "Qual é a função principal do Next.js?",
  [
    AnswersModel.wrong("Criar apenas APIs REST"),
    AnswersModel.wrong("Framework de CSS para React"),
    AnswersModel.wrong("Ferramenta de versionamento de código"),
    AnswersModel.wrong("Biblioteca de animações para JavaScript"),
    AnswersModel.correct("Framework React para aplicações web com SSR/SSG"),
  ]
);

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>(questionTest);

  async function loadQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/questionary`);
    const questionsIds = await resp.json();
    setQuestionsIds(questionsIds);
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`);
    const question = await resp.json();
    console.log(question);
  }

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0]);
  }, [loadQuestionsIds]);

  function questionAnswered(question: QuestionModel) {}

  function goToNextStep() {}

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
      <Questionary
        question={question}
        last={true}
        questionAnswered={questionAnswered}
        goToNextStep={goToNextStep}
      />
    </div>
  );
}
