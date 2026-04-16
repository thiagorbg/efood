import type { ProductItem } from '../../pages/home'
import Product from '../Products'
import { Grid } from './style'
import star from '../../assets/images/estrela.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductIdQuery } from '../../services/api'

export type Props = {
  products: ProductItem[]
  path: 'home' | 'perfil'
  childrenBtn: string
  children: string
}

const ProductList = ({ products, path ,children ,childrenBtn }: Props) => {

  const [restaurante, setRestaurante] = useState<ProductItem | null>(null)
  const {id} = useParams()
  const {data: productos} = useGetProductIdQuery(id!)


  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((data: ProductItem[]) => {
      const encontadro = data.find((r) => r.id === Number(id))
      setRestaurante(encontadro || null)
    })
  },[id])






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
  if (!restaurante)  <div>carregando...</div>
    return (
    <section className="container">
      <Grid path={path}>
        {restaurante?.cardapio.map((product) => (
          <Product
            product={productos}
            key={product.id}
            id={product.id!}
            path="perfil"
            childrenBtn={childrenBtn}
            discription={product.descricao!}
            image={product.foto!}
            title={product.nome!}
            portion={product.porcao}
            children={children || ''}
            price={product.preco}
          />
        ))}
      </Grid>
    </section>
  )


}
export default ProductList
