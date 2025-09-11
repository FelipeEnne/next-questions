import Question from "../../components/Questions";
import AnswersModel from "../../model/answer";
import QuestionModel from "../../model/question";

export default function Home() {
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
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Question value={questionTest} />
    </div>
  );
}
