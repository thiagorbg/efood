import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import { useEffect, useState } from 'react'


export type ProductItem = {
  id: number
  titulo: string
  destacado?: true
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}[]
}

const Home = () => {

  const [restaurantes, setRestaurantes] = useState<ProductItem[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((res) => setRestaurantes(res))

  },

  [])

  return (
    <>
      <Hero />
      <ProductList children='Saiba mais' childrenBtn='Saiba mais ' path="home" products={restaurantes} />
      <Footer />
    </>

  )
}


export default Home
