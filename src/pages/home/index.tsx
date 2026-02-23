import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import type ProductItem from '../../models/Product'
import hiaoki from '../../assets/images/hiaoki.png'
import starimg from '../../assets/images/estrela.png'

const typesOfFood: ProductItem[] = [
  {
    id: 1,
    children: 'Saiba mais',
    discription:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiaoki,
    star: '4.9',
    starImg: starimg,
    title: 'Hiaoki',
    infos: ['Japonesa']
  },
  {
    id: 1,
    children: 'Saiba mais',
    discription:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiaoki,
    star: '4.9',
    starImg: starimg,
    title: 'Hiaoki',
    infos: ['Japonesa']
  },
  {
    id: 1,
    children: 'Saiba mais',
    discription:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiaoki,
    star: '4.9',
    starImg: starimg,
    title: 'Hiaoki',
    infos: ['Japonesa']
  },
  {
    id: 1,
    children: 'Saiba mais',
    discription:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiaoki,
    star: '4.9',
    starImg: starimg,
    title: 'Hiaoki',
    infos: ['Japonesa']
  },
  {
    id: 1,
    children: 'Saiba mais',
    discription:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiaoki,
    star: '4.9',
    starImg: starimg,
    title: 'Hiaoki',
    infos: ['Japonesa']
  },
  {
    id: 1,
    children: 'Saiba mais',
    discription:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiaoki,
    star: '4.9',
    starImg: starimg,
    title: 'Hiaoki',
    infos: ['Japonesa']
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductList path="home" products={typesOfFood} />
    <Footer />
  </>
)

export default Home
