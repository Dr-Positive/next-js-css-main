import styles from '../components/questionLink.module.scss'

export function QuestionLink({disabled, isUHere, text}) {
    console.log()
  return (
    <div className={styles.link}>
      <span className={`${styles.link__text} ${disabled && styles.disabled} ${isUHere && styles.isUHere}`}>{text}</span>
    </div>
  )
  }