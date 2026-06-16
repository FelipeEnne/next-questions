import type { MouseEventHandler } from "react";
import styles from "../src/styles/Button.module.css";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  if (props.href) {
    return (
      <Link href={props.href} className={styles.button}>
        {props.text}
      </Link>
    );
  }

  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
