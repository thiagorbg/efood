import type { RootReduce } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {open} from '../../store/reducers/cart'
import efoofImg from '../../assets/images/logoEfood.png'
import headerBackground from '../../assets/images/headerBackground.png'
import { Container, LinkStyle } from './style'

const Header = () => {
  const dispatch = useDispatch()
  const {pratos} = useSelector((state: RootReduce) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <section style={{ backgroundImage: `url(${headerBackground})` }}>
      <Container className="container">
        <div>
          <LinkStyle children="Restaurantes" type="link" to="/" />
        </div>
        <div className='img'>
          <img src={efoofImg} alt="" />
        </div>
        <div>
          <LinkStyle  onClick={openCart} children={`${pratos.length} produto(s) no carrinho`} type="link" to="#" />
        </div>
      </Container>
    </section>
  )
}

export default Header
