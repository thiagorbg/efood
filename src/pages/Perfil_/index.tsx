import { useParams } from 'react-router-dom'
import {useGetProductIdQuery ,useGetProductQuery} from '../../services/api'
import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import Banner from '../../components/Banner'




const Perfil = () => {
  const {id} = useParams()
  const {data:pratos} = useGetProductIdQuery(id || '')
  const {data:produtos} = useGetProductQuery()


if (!!produtos && pratos) {

  return (
    <>

      <Header />
      <Banner/>
      <ProductList children='Mais detalhes' childrenBtn={`adicionar ao carrinho  `} path="perfil" products={produtos} pratos={pratos.cardapio} />
      <Footer />
    </>
)
}
}
  export default Perfil
