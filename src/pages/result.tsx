import Button from "../../components/Button";
import Statistics from "../../components/Statistics";
import styles from "../styles/Result.module.css";
import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();

  const totalParam = router.query.total;
  const rightParam = router.query.right;

  const total = typeof totalParam === "string" ? Number(totalParam) : 0;
  const right = typeof rightParam === "string" ? Number(rightParam) : 0;

  const percent = total > 0 ? Math.round((right / total) * 100) : 0;
  return (
    <div className={styles.result}>
      <h1>Result</h1>
      <div style={{ display: "flex" }}>
        <Statistics text="Questions" value={total} />
        <Statistics text="Rights" value={right} backColor="#9cd2a4" />
        <Statistics text="Percent" value={`${percent}%`} backColor="#de6a33" />
      </div>
      <Button href="/" text="Try again" />
    </div>
  );
}
