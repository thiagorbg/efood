import pizza from '../../assets/images/imagePizza.png'
import { CartItem, ContainerTag, NavBar, Overlay, Price } from './style'

const Cart = () => {

  return (
    <ContainerTag>
      <Overlay/>
      <NavBar >
        <ul>
          <CartItem>
            <img src={pizza} alt="" />
            <div>
              <h3>Pizza Marguerida</h3>
              <p>R$ 60,90</p>
            </div>
          </CartItem>
          <CartItem>
            <img src={pizza} alt="" />
            <div>
              <h3>Pizza Marguerida</h3>
              <p>R$ 60,90</p>
            </div>
          </CartItem>
        </ul>
        <Price>
          <p> Valor total</p>
          <p>R$ 180,90</p>
        </Price>
        <button>Continuar com a compra</button>
      </NavBar>
    </ContainerTag>
  )
}
export default Cart
