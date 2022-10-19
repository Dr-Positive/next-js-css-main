import styles from '../components/card.module.scss'
import Image from 'next/image'
import { TextBox } from '../components/text-Box.js'

export function Card({ text, src }) {
    
  return (
      <div className={styles.main}>             
          <div className={styles.img}> <Image src={'/image/png/card1.png'} alt="image" height ={200} width ={300}/> </div>
          <div className={styles.text}> {text} </div>
          <div className={styles.qustion}>
            <TextBox checked={false} disabled={false} text='хувер кнопка'></TextBox>
            <TextBox checked={false} disabled={true} text='дизаейбл кнопка'></TextBox>
            <TextBox checked={true} disabled={false} text='чекай кнопка'></TextBox>
            <TextBox checked={true} disabled={true} text='дизейбл/чекай кнопка'></TextBox> 
          </div>    
      </div> 
  )
  }