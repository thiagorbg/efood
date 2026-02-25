import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'
import type ProductItem from '../../models/Product'
import pizza from '../../assets/images/imagePizza.png'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

const typesOfFoodd: ProductItem[] = [
  {
    id: 1,
    childrenBtn: 'Adicionar ao carrinho',
    discription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 2,
    childrenBtn: 'Adicionar ao carrinho',
    discription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    childrenBtn: 'Adicionar ao carrinho',
    discription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    childrenBtn: 'Adicionar ao carrinho',
    discription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    childrenBtn: 'Adicionar ao carrinho',
    discription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    childrenBtn: 'Adicionar ao carrinho',
    discription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <ProductList path="perfil" products={typesOfFoodd} />
    <Footer />
  </>
)

export default Perfil
