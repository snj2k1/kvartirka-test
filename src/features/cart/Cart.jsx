import styles from './Cart.module.css';
import {selectCartLength} from './cart-slice'
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";

const Cart = () => {
  const cartLength = useSelector(selectCartLength);

  return(
    <div className={styles.cart}>
      <div className={styles.info}>
        <h2>
          Корзина
        </h2>
        <span>
          {cartLength}
          {cartLength === 1 ? ' астероид' : (cartLength === 2 || cartLength === 3 || cartLength === 4 ? ' астероида' : " астероидов")}
        </span>
      </div>
      <Link to={'/order'} className={styles.btn}>
        Отправить
      </Link>
    </div>
  )
}

export {Cart}