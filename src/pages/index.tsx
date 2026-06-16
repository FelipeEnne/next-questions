import { useEffect, useState } from "react";
import Questionary from "../../components/Questionary";
import QuestionModel from "../../model/question";
import { useRouter } from "next/router";
import Button from "../../components/Button";

type LoadStatus = "loading" | "error" | "ready";

const containerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export default function Home() {
  const router = useRouter();

  const [status, setStatus] = useState<LoadStatus>("loading");
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel | null>(null);
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  async function loadQuestionsIds() {
    setStatus("loading");
    try {
      const resp = await fetch("/api/questionnaire");
      if (!resp.ok) throw new Error("Failed to load questionnaire");
      const ids = await resp.json();
      setQuestionsIds(ids);
    } catch {
      setStatus("error");
    }
  }

  async function loadQuestion(questionId: number) {
    try {
      const resp = await fetch(`/api/questions/${questionId}`);
      if (!resp.ok) throw new Error("Failed to load question");
      const json = await resp.json();
      const newQuestion = QuestionModel.createUsingObj(json);
      setQuestion(newQuestion);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
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
    if (!question) return undefined;
    const nextIndex = questionsIds.indexOf(question.id) + 1;
    return questionsIds[nextIndex];
  }

  function goToNextStep() {
    const nextId = idNextQuestion();
    if (nextId) {
      loadQuestion(nextId);
    } else {
      finish();
    }
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

  if (status === "loading") {
    return (
      <div style={containerStyle}>
        <p>Carregando perguntas...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div style={containerStyle}>
        <p>Não foi possível carregar as perguntas.</p>
        <Button text="Tentar novamente" onClick={loadQuestionsIds} />
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {question ? (
        <Questionary
          question={question}
          last={idNextQuestion() === undefined}
          questionAnswered={questionAnswered}
          goToNextStep={goToNextStep}
        />
      ) : null}
    </div>
  );
}
