import styles from "../src/styles/Button.module.css";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
}

export default function Button(props: ButtonProps) {
  function renderButton() {
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.text}
      </button>
    );
  }

  return props.href ? (
    <Link href={props.href}>{renderButton()}</Link>
  ) : (
    renderButton()
  );
}
