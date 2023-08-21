import styles from './Header.module.css';
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header>
        <Link to={'/'} className={styles.title}>ARMAGEDDON 2023</Link>
        <span className={styles.info}>ООО “Команда им. Б. Уиллиса”. <br></br> Взрываем астероиды с 1998 года.</span>
    </header>
  )
}

export {Header};