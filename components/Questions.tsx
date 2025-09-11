import styles from "../src/styles/Question.module.css";
import QuestionModel from "../model/question";
import Announcement from "./Announcement";
import Answer from "./Answer";

const letters = [
  { value: "A", color: "#f2c866" },
  { value: "B", color: "#f266ba" },
  { value: "C", color: "#85d4f2" },
  { value: "D", color: "#bce596" },
  { value: "E", color: "#FF8C00" },
];

interface QuestionProps {
  value: QuestionModel;
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  function renderAnswers() {
    return question.answers.map((a, i) => {
      return (
        <Answer
          key={i}
          value={a}
          index={i}
          letter={letters[i].value}
          backgrounLetterColor={letters[i].color}
        />
      );
    });
  }

  return (
    <div className={styles.question}>
      <Announcement text={question.announcement} />
      {renderAnswers()}
    </div>
  );
}
