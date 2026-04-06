import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import type { ProductItem } from '../home'
import { useParams } from 'react-router-dom'





const Perfil = () => {
  const {id} = useParams()

  const [cardapio, setCardapio] = useState<ProductItem[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then( (res) => setCardapio(res))

  },
  [])

  if (!id) return <div>Carregando...</div>
  return (

    <>

      <Header />
      <Banner/>
      <ProductList children='Saiba mais' childrenBtn='adicionar ao carrinho ' path="perfil" products={cardapio} />
      <Footer />
    </>
)
}
  export default Perfil
