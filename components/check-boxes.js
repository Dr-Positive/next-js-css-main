import styles from '../components/check-boxes.module.scss'

export function CheckBox({ checked, disabled, className }) {
    
  return (
    <div
      className={`
    ${styles.main}
    ${disabled ? styles.disabled : ""}
    ${checked ? styles.checked : ""}
    ${className ?? ""}
    `}>
       {checked && (
                 <div className={styles.square}/>    
            )}
        </div>
  
  )
  }