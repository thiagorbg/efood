import bannerImg from '../../assets/images/image_header.png'
import {Image} from './style'

const Banner = () => (
  <Image style={{backgroundImage: `url(${bannerImg})`}}>
      <div className="container center">
          <h2>Italiana</h2>
          <h3>La Dolce Vite Trattoria</h3>
      </div>
  </Image>
)
export default Banner
