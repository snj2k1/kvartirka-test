import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectAsteroid } from "../../features/asteroids/asteroids-slice";

const Detail = () => {
  const {name} = useParams();
  const data = useSelector((state) => selectAsteroid(state, name))
  console.log(data)
}

export {Detail}