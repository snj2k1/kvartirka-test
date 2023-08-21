import styles from './Asteroids.module.css'
import {AsteroidsList} from '../AsteroidsList/AsteroidsList'
import {selectDistance, changeDistance} from '../../features/distance/distance-slice'
import {useDispatch, useSelector} from 'react-redux'

const Asteroids = () => {
  const distance = useSelector(selectDistance);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if(event.target.id !== distance){
      dispatch(changeDistance(event.target.id));
    }
  }

  return(
    <section>
      <h1 className={styles.title}>Ближайшие подлёты астероидов</h1>
      <div className={styles.buttons}>
        <button id='kilometers' className={distance === 'kilometers' ? styles.button + ' ' + styles.active : styles.button} onClick={handleChange}>в километрах</button>
        <span>|</span>
        <button id='lunar' className={distance === 'lunar' ? styles.button + ' ' + styles.active : styles.button} onClick={handleChange}>в лунных орбитах</button>
      </div>
      <AsteroidsList/>
    </section>
  )
}

export {Asteroids}