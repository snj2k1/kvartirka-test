import styles from './Footer.module.css';

const Footer = () => {
  return(
    <footer>
      <span className={styles.copyright}>© Все права и планета защищены</span>
    </footer>
  )
}

export {Footer}