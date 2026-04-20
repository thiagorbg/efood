import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import {useGetProductIdQuery ,useGetProductQuery} from '../../services/api'




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
