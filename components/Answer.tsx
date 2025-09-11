import AnswersModel from "../model/answer";
import styles from "../src/styles/Answer.module.css";

interface AnswerProps {
  value: AnswersModel;
  index: number;
  letter: string;
  backgrounLetterColor: string;
}

export default function Answer(props: AnswerProps) {
  const response = props.value;

  return (
    <div className={styles.answer}>
      <div className={styles.contentAnswer}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: props.backgrounLetterColor }}
          >
            {props.letter}
          </div>
          <div className={styles.value}>{response.value}</div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
}
