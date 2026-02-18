import { HeroBackgrond } from "./style"
import herofind from "../../assets/images/headerBackground.png"
import efoodImg from "../../assets/images/logoEfood.png"


const Hero = () => (
  <header>
    <HeroBackgrond style={{ backgroundImage: `url(${herofind})` }}>
      <div>
        <img src={efoodImg} alt="" />
      </div>
      <div>
        <p>
          Viva experiências gastronômicasno conforto da sua casa
        </p>
      </div>
    </HeroBackgrond>
  </header>
)
export default Hero
