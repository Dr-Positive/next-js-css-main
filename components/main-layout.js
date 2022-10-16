import styles from "../components/main-layout.module.scss";
import { ImgBox } from './img-box.js'


export function MainLayout({ }) {
  return (
      <div>        
        <div className={styles.header}>
        <ImgBox  src={'/image/svg/question-mark.svg'}  text={'50/60'}></ImgBox>
         <ImgBox  src={'/image/svg/clock.svg'}  text={'60:60'} ></ImgBox>
         <p className={styles.header__p}>
          РУСЬ И ЗОЛОТАЯ ОРДА 
         </p>
         <ImgBox  src={'/image/png/mini-logo.png'} ></ImgBox>            
        </div>
          <div className={styles.container}>
            <div className={styles.leftMenu}>
                левая штука

            </div >

            <div className={styles.main}>
                основа

            </div >
            

            
          </div>
      </div>

  );
}


