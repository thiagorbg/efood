import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import Banner, { type CardapioItem } from '../../components/Banner'
import { useEffect, useState } from 'react'
import type { ProductItem } from '../home'
import { useParams } from 'react-router-dom'





const Perfil = () => {
  const {id} = useParams()

  const [cardapio, setCardapio] = useState<ProductItem[]>([])
  // const [price, setPrice] = useState<CardapioItem | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then( (res) => setCardapio(res))

  },
  [])

  // useEffect(() => {
  //   fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
  //   .then((res) => res.json())
  //   .then( (res) => setPrice(res))

  // },
  // [])

  // if () {

  // }


  if (!id) return <div>Carregando...</div>
  return (

    <>

      <Header />
      <Banner/>
      <ProductList children='Mais detalhes' childrenBtn={`adicionar ao carrinho  `} path="perfil" products={cardapio} />
      <Footer />
    </>
)
}
  export default Perfil
