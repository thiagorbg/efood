import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Image} from './style'


export type CardapioItem = {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  porcao: string;
};

export type ProductItem = {
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
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data: ProductItem) => setProduct(data))
      .catch((err) => console.error('Erro:', err));
  }, [id]);

  if (!product) return <div>Carregando...</div>;

  // Primeira foto do cardápio para destaque no banner
  const primeiraFoto = product.cardapio[0]?.foto;

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
        <h3>{product.cardapio[0]?.nome || 'Cardápio'}</h3>
      </div>
    </Image>
  );
};

export default Banner;
