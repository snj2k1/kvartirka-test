import {Asteroids} from '../../components/Asteroids/Asteroids'
import "./Main.module.css"
import {selectCartLength} from '../../features/cart/cart-slice'
import {Cart} from '../../features/cart/Cart'
import {useSelector} from 'react-redux'

const Main = () => {
  const cartLength = useSelector(selectCartLength);

  return(
    <main>
        <Asteroids/>
        {cartLength && <Cart/>}
    </main>
  )
}

export {Main}