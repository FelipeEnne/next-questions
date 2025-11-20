import QuestionModel from "../model/question";
import styles from "../src/styles/Questionary.module.css";
import Question from "./Questions";
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

  return (
    <div className={styles.questionary}>
      {props.question ? (
        <Question
          value={props.question}
          timerToAnswer={6}
          onAnswer={onAnswer}
          timeOut={props.goToNextStep}
        />
      ) : (
        false
      )}
      <Button
        onClick={props.goToNextStep}
        text={props.last ? "Finish" : "Next"}
      />
    </div>
  );
}
