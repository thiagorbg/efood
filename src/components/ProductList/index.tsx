import type { ProductItem } from '../../pages/home'
import Product from '../Products'
import { Grid } from './style'
import star from '../../assets/images/estrela.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export type Props = {
  products: ProductItem[]
  path: 'home' | 'perfil'
  childrenBtn: string
  children: string
}

const ProductList = ({ products, path ,children ,childrenBtn }: Props) => {

  const [restaurante, setRestaurante] = useState<ProductItem | null>(null)
  const {id} = useParams()

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
            key={product.id}
            id={product.id}
            path="perfil"
            childrenBtn={childrenBtn}
            discription={product.descricao}
            image={product.foto}
            title={product.nome}
            portion={product.porcao}
            children={children || ''}
          />
        ))}
      </Grid>
    </section>
  )


}
export default ProductList

// products?.map((product) =>
//         product.
//         cardapio.map((item) => (
//           <Product
//           key={item.id}
//           id={item.id}
//           path="perfil"
//           childrenBtn={childrenBtn}
//           discription={item.descricao}
//           image={item.foto}
//           title={item.nome}
//           children={children || ''}
//       />
//     ))
//   )}


// {cardapio?.map((item ) => item.cardapio.map((product) => (
//           <Product
//             path='perfil'
//             key={product.id}
//             id={product.id}
//             childrenBtn={childrenBtn}
//             discription={product.descricao}
//             image={product.foto}
//             title={product.nome}
//             children={children || ''}
//           />
//         )))}
