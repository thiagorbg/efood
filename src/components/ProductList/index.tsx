import Product from '../Products'
import { Grid } from './style'
import type ProductItem from '../../models/Product'

type Props = {
  products: ProductItem[]
}

const ProductList = ({ products }: Props) => (
  <section className="container">
    <Grid>
      {products.map((product) => (
        <Product
          key={product.id}
          children={product.children}
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
export default ProductList
