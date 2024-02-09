import JokeBlock from "@components/JokeBlock";
import Logo from "@components/Logo";
import common from "@styles/common.module.css";
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer id='contact' className={styles.footer}>
        <div className={`col`}>
          <div className={`row ${styles.footer_bottom} ${common.wrapper}`}>
            <div className={`col`}>
              <JokeBlock />
            </div>
            <div className={`col`}>
              <Logo width='2em' gradient iconOnly />
            </div>
            <div className={`col`}>
              © 2024
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
