import AnswersModel from "../model/answer";
import styles from "../src/styles/Answer.module.css";

interface AnswerProps {
  value: AnswersModel;
  index: number;
  letter: string;
  backgrounLetterColor: string;
  onAnswer: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const response = props.value;

  return (
    <div className={styles.answer} onClick={() => props.onAnswer(props.index)}>
      <div className={styles.contentAnswer}>
        {!response.revealed ? (
          <div className={styles.front}>
            <div
              className={styles.letter}
              style={{ backgroundColor: props.backgrounLetterColor }}
            >
              {props.letter}
            </div>
            <div className={styles.value}>{response.value}</div>
          </div>
        ) : (
          <div className={styles.back}>
            {response.correct ? (
              <div className={styles.right}>
                <div>Correct answer is ...</div>
                <div className={styles.value}>{response.value}</div>
              </div>
            ) : (
              <div className={styles.wrong}>
                <div>Wrong answer ...</div>
                <div className={styles.value}>{response.value}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
