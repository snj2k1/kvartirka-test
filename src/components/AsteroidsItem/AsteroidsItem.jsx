import AsteroidBigImg from '../../img/asteroid-big.png'
import AsteroidSmallImg from '../../img/asteroid-small.png'
import styles from './AsteroidsItem.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {selectDistance} from '../../features/distance/distance-slice'
import {addBasket, deleteBasket} from '../../features/cart/cart-slice'
import { useState } from 'react'
import { Link } from "react-router-dom";

const AsteroidsItem = (props) => {
  const dispatch = useDispatch();
  const [inBasket, setInBasket] = useState(false);
  const {data, danger, name, diameter} = props;
  const distance = useSelector(selectDistance);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  const handleClick = () => {
    if(inBasket){
      dispatch(deleteBasket(name));
      setInBasket(false);
    }
    else{
      dispatch(addBasket({data, danger, name, diameter}));
      setInBasket(true);
    }
  }

  return(
    <li className={styles.item}>
        <span className={styles.date}>
          {new Date(data.close_approach_date).toLocaleString("ru", options)}
        </span>
        <div className={styles.info}>
          {
            distance === 'kilometers' ?
            <span className={styles.distant}>
              {new Intl.NumberFormat('ru-RU').format(parseInt(data.miss_distance.kilometers))} км
            </span> :
            <span className={styles.distant}>
              {new Intl.NumberFormat('ru-RU').format(parseInt(data.miss_distance.lunar))}
              {
                parseInt(data.miss_distance.lunar) % 10 === 0 || (parseInt(data.miss_distance.lunar) % 10 <= 9 && parseInt(data.miss_distance.lunar) % 10 >= 4) ? ' лунных орбит' :
                (parseInt(data.miss_distance.lunar) % 10 <= 3 && parseInt(data.miss_distance.lunar) % 10 >= 2 ? ' лунные орбиты' : ' лунная орбита')
              }
            </span>
          }
          {
            parseInt(diameter) >= 100 ? <img src={AsteroidBigImg} alt="AsteroidBigImg" /> : <img src={AsteroidSmallImg} alt="AsteroidSmallImg" style={{'max-height': '24px', 'margin': 'auto 0'}} />
          }
          <div className={styles.specifications}>
            <Link to={name}>{name}</Link>
            <span>Ø {parseInt(diameter)} м</span>
          </div>
        </div>
        <div className={styles.btn}>
          {
            inBasket ? <button onClick={handleClick} className={styles.active}>В корзине</button> :
            <button onClick={handleClick}>Заказать</button>
          }
          {danger && <span>⚠ Опасен</span>}
        </div>
    </li>
  )
}

export {AsteroidsItem};