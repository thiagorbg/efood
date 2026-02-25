import efoofImg from '../../assets/images/logoEfood.png'
import headerBackground from '../../assets/images/headerBackground.png'
import { Container, LinkStyle } from './style'

const Header = () => (
  <section style={{ backgroundImage: `url(${headerBackground})` }}>
    <Container className="container">
      <div>
        <LinkStyle children="Restaurantes" type="link" to="/" />
      </div>
      <div>
        <img src={efoofImg} alt="" />
      </div>
      <div>
        <LinkStyle children="0 produto(s) no carrinho" type="link" to="#" />
      </div>
    </Container>
  </section>
)

export default Header
