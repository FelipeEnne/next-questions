import { useState } from "react";
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

export default function Home() {
  const [question, setQuestion] = useState(questionTest);

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
