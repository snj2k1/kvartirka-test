import { useSelector } from "react-redux";
import { selectDistance } from "../../features/distance/distance-slice";
import AsteroidBigImg from '../../img/asteroid-big.png'
import AsteroidSmallImg from '../../img/asteroid-small.png'
import styles from './OrderItem.module.css'
import { Link } from "react-router-dom";

const OrderItem = (props) => {
  const {data, danger, name, diameter} = props;
  const distance = useSelector(selectDistance);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

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
          {danger && <span>⚠ Опасен</span>}
        </div>
    </li>
  )
}

export {OrderItem}