
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
