import styles from "../components/button.module.scss";

export function Button({ text, disabled}) {
  return (
    <button disabled={disabled} className={styles.button}>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
