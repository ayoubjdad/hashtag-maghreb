import React from "react";
import styles from "./Button.module.scss";

export default function Button({ text }) {
  return <button className={styles.btnContainer}>{text}</button>;
}
