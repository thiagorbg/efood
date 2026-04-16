import { useDispatch, useSelector } from 'react-redux'
import { format } from '../Products'
import { CartItem, ContainerTag, NavBar, Overlay, Price } from './style'
import type { RootReduce } from '../../store'
import { close} from '../../store/reducers/cart'


const Cart = () => {
  const { isOpen , items} = useSelector((state: RootReduce) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + (item.cardapio![0]?.preco || 0), 0);
};

  return (
    <ContainerTag className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}/>
      <NavBar >
        <ul>
          {items.map((item) => (item.cardapio!.map((itens) => (
            <CartItem key={itens.id}>
              <img src={itens.foto} alt="" />
              <div>
                <h3>{itens.nome}</h3>
                <p>{format(itens.preco)}</p>
              </div>
              <button  type='button'/>
            </CartItem>
          )) ))}
        </ul>
        <Price>
          <p> Valor total</p>
          <p>{format(getTotalPrice())}</p>
        </Price>
        <button>Continuar com a compra</button>
      </NavBar>
    </ContainerTag>
  )
}
export default Cart
