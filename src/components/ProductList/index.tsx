import Product from '../Products'
import { Grid } from './style'
import type ProductItem from '../../models/Product'

export type Props = {
  products: ProductItem[]
  path: 'home' | 'perfil'
}

const ProductList = ({ products, path }: Props) => {
  if (path === 'home') {
    return (
      <section className="container">
        <Grid path={path}>
          {products.map((product) => (
            <Product
              path="home"
              childrenBtn={product.childrenBtn}
              key={product.id}
              children={product.children || ''}
              discription={product.discription}
              image={product.image}
              star={product.star}
              title={product.title}
              starImg={product.starImg}
              infos={product.infos}
            />
          ))}
        </Grid>
      </section>
    )
  }
  return (
    <section className="container">
      <Grid path={path}>
        {products.map((product) => (
          <Product
            path="perfil"
            childrenBtn={product.childrenBtn}
            key={product.id}
            discription={product.discription}
            image={product.image}
            title={product.title}
            children={product.children || ''}
          />
        ))}
      </Grid>
    </section>
  )
}
export default ProductList
