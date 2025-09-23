import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../src/styles/Timer.module.css";

interface TimerProps {
  duration: number;
  timerOut: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={props.duration}
        onComplete={props.timerOut}
        colors={["#bce596", "#f7b801", "#ed827a"]}
        colorsTime={[10, 5, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
