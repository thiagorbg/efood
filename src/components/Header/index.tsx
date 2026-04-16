import efoofImg from '../../assets/images/logoEfood.png'
import headerBackground from '../../assets/images/headerBackground.png'
import { Container, LinkStyle } from './style'
import {open} from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReduce } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const {items} = useSelector((state: RootReduce) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <section style={{ backgroundImage: `url(${headerBackground})` }}>
      <Container className="container">
        <div>
          <LinkStyle children="Restaurantes" type="link" to="/" />
        </div>
        <div>
          <img src={efoofImg} alt="" />
        </div>
        <div>
          <LinkStyle  onClick={openCart} children={`${items.length} produto(s) no carrinho`} type="link" to="#" />
        </div>
      </Container>
    </section>
  )
}

export default Header
