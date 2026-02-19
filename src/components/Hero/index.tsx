import { HeroBackgrond, P, EfoodIcon } from './style'
import herofind from '../../assets/images/headerBackground.png'
import efoodImg from '../../assets/images/logoEfood.png'

const Hero = () => (
  //<header>
  <HeroBackgrond style={{ backgroundImage: `url(${herofind})` }}>
    <div className="container">
      <EfoodIcon>
        <img src={efoodImg} alt="" />
      </EfoodIcon>
      <div>
        <P>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </P>
      </div>
    </div>
  </HeroBackgrond>
  //</header>
)
export default Hero
