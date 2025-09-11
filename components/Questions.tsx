import styles from "../src/styles/Question.module.css";
import QuestionModel from "../model/question";
import Announcement from "./Announcement";
import Answer from "./Answer";

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
          letter="A"
          backgrounLetterColor="#f2c866"
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
