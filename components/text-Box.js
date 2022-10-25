import styles from '../components/text-Box.module.scss'
import { RadioButton } from '../components/radio-button.js'

export function TextBox({checked, disabled, text}) {   
  return (
    <div className={`${styles.button} ${disabled && styles.disabled} ${checked && styles.checked}`}>
       <RadioButton checked={checked} disabled={disabled} className={styles.element}/> 
      <span className={styles.button__text}>{text} </span>
    </div>
  )
  }