import type { CardapioItem, ProductItem } from '../../models/index'
import Product from '../Products'
import { Grid } from './style'
import star from '../../assets/images/estrela.png'

export type Props = {
  products: ProductItem[]
  path: 'home' | 'perfil'
  childrenBtn: string
  children: string
  pratos?: CardapioItem[]
}

const ProductList = ({ products, path ,children ,childrenBtn,pratos }: Props) => {

  if (path === 'home') {
    return (
      <section className="container">
        <Grid path={path}>
          {products.map((product) => (
            <Product
              id={product.id}
              path="home"
              childrenBtn={childrenBtn}
              key={product.id}
              children={children || ''}
              discription={product.descricao}
              image={product.capa}
              star={product.avaliacao}
              title={product.titulo}
              starImg={star}
              infos={[product.tipo]}

            />
          ))}
        </Grid>
      </section>
    )
  }
  if (!products)  <div>carregando...</div>
    return (
      <section className='container'>
        <Grid path={path}>
          {pratos!.map((produtos) => (
          <Product
            key={produtos.id}
            id={produtos.id}
            path="perfil"
            childrenBtn={childrenBtn}
            discription={produtos.descricao}
            image={produtos.foto}
            title={produtos.nome}
            portion={produtos.porcao}
            children={children || ''}
            price={produtos.preco}
            product={produtos}
          />
          ))}
        </Grid>
      </section>
  )


}
export default ProductList

