import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import { useEffect, useState } from 'react'
import type { ProductItem } from '../../models'

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
