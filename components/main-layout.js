import styles from "../components/main-layout.module.scss";
import { ImgBox } from "./img-box.js";
import { LeftBar } from "../components/leftBar.js";
import { Card } from '../components/card.js'

export function MainLayout({}) {
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.leftMenu}>
          <LeftBar></LeftBar>
        </div>

        <div className={styles.main}>основа
        <Card  text={"Посмотрите на карту и определите о какой войне идет речь?"}>  </Card>
        </div>
        <div className={styles.header}>
          <div className={styles.header__start}>
            <ImgBox
              src={"/image/svg/question-mark.svg"}
              text={"8/20"}
            ></ImgBox>
            <ImgBox src={"/image/svg/clock.svg"} text={"60:60"}></ImgBox>
          </div>
          <p className={styles.header__center}>РУСЬ И ЗОЛОТАЯ ОРДА</p>
          <div></div>
          <div className={styles.header__end}>
            <ImgBox src={"/image/png/mini-logo.png"}></ImgBox>
          </div>
        </div>
        <div className={styles.container}></div>
      </div>
    </div>
  );
}
