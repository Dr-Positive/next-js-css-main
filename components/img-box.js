import styles from '../components/img-box.module.scss'
import Image from 'next/image'

export function ImgBox({ text, src }) {
    
  return (
      <div className={styles.main}>          
          <div className={styles.img}> <Image src={src} alt="image" height ={48} width ={48}/> </div>
          <div className={styles.text}> {text} </div>
      </div> 
  )
  }