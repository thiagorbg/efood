import { useParams } from 'react-router-dom';
import {Image} from './style'
import { useGetProductIdQuery } from '../../services/api';


export type CardapioItem = {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  porcao: string;
};

export type ProductItemm = {
  id: number;
  titulo: string;
  destacado?: true;
  tipo: string;
  avaliacao: string;
  descricao: string;
  capa: string; // Imagem principal do restaurante
  cardapio: CardapioItem[];
};

const Banner = () => {
  const { id } = useParams();
  const {data: product} = useGetProductIdQuery(id!)
  if (!id) return <div>error</div>


  if (!product) return <div>Carregando...</div>;

  // Primeira foto do cardápio para destaque no banner
  const primeiraFoto = product.cardapio![0]?.foto;

  return (
    <Image
      style={{
        backgroundImage: `url(${product.capa || primeiraFoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container center">
        <h2>{product.titulo}</h2>
        <h3>{product.cardapio![0]?.nome || 'Cardápio'}</h3>
      </div>
    </Image>
  );
};

export default Banner;
