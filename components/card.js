import styles from '../components/card.module.scss'
import Image from 'next/image'
import { TextBox } from '../components/text-Box.js'
import { Button } from './button'

export function Card({ text, src }) {
    function GridItem ( {children }) {  }
  return (
      <div className={styles.main}>             
          <div className={styles.img}> <Image src={'/image/png/card1.png'} alt="image" height ={400} width ={600}/> </div>
          <div className={styles.text}> {text} </div>
          
            <div className={styles.qustion}>     
            
              <TextBox className={styles.qustion__1} checked={false} disabled={false} text='хувер кнопка' ></TextBox>                   
              <TextBox className={styles.qustion__2} checked={false} disabled={true} text='дизаейбл кнопка'></TextBox>
              <TextBox className={styles.qustion__3} checked={true} disabled={false} text='чекай кнопка'></TextBox>
              <TextBox className={styles.qustion__4} checked={true} disabled={true} text='дизейбл/чекай кнопка'></TextBox> 
              <div className={styles.answer}>
              <Button checked={true} disabled={true} text='Пропустить'> </Button>
              <Button checked={false} disabled={false} text='Ответить'> </Button>
              </div>

              
          </div>    
      </div> 
  )
}
  