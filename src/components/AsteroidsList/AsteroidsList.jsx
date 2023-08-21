import styles from './AsteroidsList.module.css'
import {AsteroidsItem} from '../AsteroidsItem/AsteroidsItem'
import {Loader} from '../Loader/Loader'
import { useSelector } from 'react-redux';
import { selectAsteroids } from '../../features/asteroids/asteroids-slice';

const AsteroidsList = () => {
  const { status, error, data } = useSelector(selectAsteroids);

  return(
    error !== null ? <h2>Loading error...</h2> :
    (status === 'loading' ? <Loader/> : 
      <ul className={styles.list}>
      {
        data.map(el => <AsteroidsItem key={el.id} data={el.close_approach_data[0]} danger={el.is_potentially_hazardous_asteroid} name={el.name} diameter={el.estimated_diameter.meters.estimated_diameter_max}/>)
      }
      </ul>
    )
  )
}

export {AsteroidsList}