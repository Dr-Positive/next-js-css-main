import styles from '../components/leftBar.module.scss'
import { QuestionLink } from '../components/questionLink.js'
import Image from "next/image";

export function LeftBar({}) {
    console.log()
  return (
    <div className={styles.button}>
      <div className={styles.back}>
        <Image src={'/image/svg/backArrow.svg'} alt='back' width = {10} height = {12}/>
      </div>
      <div className={styles.questions}>
      <QuestionLink disabled={false} isUHere={false} text='1'/>
      <QuestionLink disabled={false} isUHere={false} text='2'/>
      <QuestionLink disabled={true} isUHere={false} text='3'/>
      <QuestionLink disabled={true} isUHere={false} text='4'/>
      <QuestionLink disabled={false} isUHere={false} text='5'/>
      <QuestionLink disabled={false} isUHere={true} text='6'/>
      <QuestionLink disabled={true} isUHere={false} text='7'/>
      <QuestionLink disabled={true} isUHere={false} text='8'/>
      <QuestionLink disabled={true} isUHere={false} text='9'/>
      <QuestionLink disabled={true} isUHere={false} text='10'/>
      <QuestionLink disabled={true} isUHere={false} text='11'/>
      <QuestionLink disabled={true} isUHere={false} text='12'/>
      <QuestionLink disabled={true} isUHere={false} text='13'/>
      <QuestionLink disabled={true} isUHere={false} text='14'/>
      <QuestionLink disabled={true} isUHere={false} text='15'/>
      <QuestionLink disabled={true} isUHere={false} text='16'/>
      <QuestionLink disabled={true} isUHere={false} text='17'/>
      <QuestionLink disabled={true} isUHere={false} text='18'/>
      <QuestionLink disabled={true} isUHere={false} text='19'/>
      <QuestionLink disabled={true} isUHere={false} text='20'/>
      </div>
    </div>
  )
  }