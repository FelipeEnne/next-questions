import QuestionModel from "../model/question";
import styles from "../src/styles/Questionary.module.css";
import Question from "./Question";
import Button from "./Button";

interface QuestionaryProps {
  question: QuestionModel;
  last: boolean;
  questionAnswered: (question: QuestionModel) => void;
  goToNextStep: () => void;
}

export default function Questionary(props: QuestionaryProps) {
  function onAnswer(index: number) {
    if (!props.question.answered) {
      props.questionAnswered(props.question.answersWith(index));
    }
  }

  function onTimeOut() {
    if (!props.question.answered) {
      props.questionAnswered(props.question.timedOut());
    }
  }

  return (
    <div className={styles.questionary}>
      <Question
        value={props.question}
        timerToAnswer={20}
        onAnswer={onAnswer}
        timeOut={onTimeOut}
      />
      <Button
        onClick={props.goToNextStep}
        text={props.last ? "Finish" : "Next"}
      />
    </div>
  );
}
