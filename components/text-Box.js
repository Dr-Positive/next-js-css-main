import styles from "../components/text-Box.module.scss";

export function TextBox({ checked, disabled, className, text }) {
  return (
    <div
      className={`
    ${styles.main}
    ${disabled ? styles.disabled : ""}
    ${checked ? styles.checked : ""}
    ${className ?? ""}
    `}
    >
      {checked && <div className={styles.circle} />}
    </div>
  );
}
