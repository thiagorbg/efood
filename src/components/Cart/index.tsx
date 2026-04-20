import { useDispatch, useSelector } from 'react-redux'
import { format } from '../Products'
import { CartItem, ContainerTag, NavBar, Overlay, Price } from './style'
import type { RootReduce } from '../../store'
import { close ,remove} from '../../store/reducers/cart'
import pizza from '../../assets/images/imagePizza.png'




const Cart = () => {
  const { isOpen , pratos} = useSelector((state: RootReduce) => state.cart)
  const getTotalPrice = () => {
    return pratos.reduce((acumulador, item) => {
      return acumulador + item.preco
    }, 0)
  }
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

const removeItem = (id: number) => {
  dispatch(remove(id))
}
  return (
    <ContainerTag className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}/>
      <NavBar >
        <ul>
          {pratos.map((item) => (
            <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{format(item.preco)}</p>
                </div>
                <button onClick={() => removeItem(item.id)}   type='button'/>
            </CartItem>
          ))}
        </ul>
        <Price>
          <p>Valor Total</p>
          <p>{format(getTotalPrice())}</p>
        </Price>
        <button>Continuar com a entrega</button>
      </NavBar>
    </ContainerTag>
  )
}
export default Cart



