import { React } from "react";
import styles from "../components/radio-button.module.scss";

export function RadioButton({ checked, disabled, text, className }) {
  return (
    <div
      className={`
    ${styles.main}
    ${disabled ? styles.disabled : ""}
    ${checked ? styles.checked : ""}
    ${className ?? ''}
    `}
    >
      {checked && <div className={styles.circle} />}
      <div>{text}</div>
    </div>
  )
}
