import { useParams } from 'react-router-dom';
import { useGetProductIdQuery } from '../../services/api';
import {Image} from './style'

const Banner = () => {
  const { id } = useParams();
  const {data: product} = useGetProductIdQuery(id!)
  if (!id) return <div>error</div>


  if (!product) return <div>Carregando...</div>;

  // Primeira foto do cardápio para destaque no banner
  const primeiraFoto = product.capa;

  return (
    <Image
      style={{
        backgroundImage: `url(${product.capa || primeiraFoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container center">
        <h2>{product.tipo}</h2>
        <h3>{product.titulo}</h3>
      </div>
    </Image>
  );
};

export default Banner;
