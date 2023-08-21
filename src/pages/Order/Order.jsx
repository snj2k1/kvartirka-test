import { OrderItem } from "./OrderItem"
import styles from './Order.module.css'
import { useDispatch, useSelector } from "react-redux"
import { clearBasket, selectCart } from "../../features/cart/cart-slice"
import { useEffect} from "react"
import { useNavigate } from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart)
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearBasket());
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);
  
  return(
    <main>
      <section>
        <h1 className={styles.title}>Заказ отправлен!</h1>
        <ul className={styles.list}>
          {
            cartItems.map((el, i) => <OrderItem key={i} data={el.data} danger={el.danger} name={el.name} diameter={el.diameter}/>)
          }
        </ul>
      </section>
    </main>
  )
}

export {Order}