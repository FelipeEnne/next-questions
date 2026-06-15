import styles from "../src/styles/Statistics.module.css";

interface StatisticsProps {
  value: number | string;
  text: string;
  backColor?: string;
  fontColor?: string;
}
export default function Statistics(props: StatisticsProps) {
  return (
    <div className={styles.statistics}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.backColor ?? "#fdd60f",
          color: props.fontColor ?? "#333",
        }}
      >
        {props.value}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
