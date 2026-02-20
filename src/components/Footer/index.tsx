import { Box, Div, Foter, ListUl, Rodpe } from "./style"
import efoodLogo from '../../assets/images/logoEfood.png'
import intagram from '../../assets/images/logoInstagram.png'
import facebook from '../../assets/images/logoFacebook.png'
import twiter from '../../assets/images/logoTwitter.png'


const Footer = () => (
  <Foter >
    <Rodpe className="container">
      <Box>
        <img src={efoodLogo} alt="Logo do Efood" />
        <Div>
          <ListUl>
            <li>
              <img src={intagram} alt="Logo do instagram" />
            </li>
            <li>
              <img src={facebook} alt="Logo do facebook" />
            </li>
            <li>
              <img src={twiter} alt="Logo do twiter" />
            </li>
          </ListUl>
        </Div>
      </Box>
      <div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br/> dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </Rodpe>
  </Foter>
)

export default Footer
