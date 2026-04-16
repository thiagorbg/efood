import TagButton from '../Tag'
import close from '../../assets/images/close.png'

import { Title, Description, Card, Border, Infos, Div, Button, PopUps, Modal} from './style'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {add, open} from '../../store/reducers/cart'
import type { ProductItem } from '../../pages/home'
import type { ProductItemm } from '../Banner'

export const format = (price: number): String => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

export type Props = {
  image: string
  infos?: string[]
  title: string
  star?: string
  starImg?: string
  discription: string
  children: string
  path?: 'home' | 'perfil'
  childrenBtn?: string
  id: number
  portion?: string
  price?: number
  product?: ProductItem
}

const Product = ({
  image,
  starImg,
  children,
  discription,
  star,
  title,
  infos,
  path,
  childrenBtn,
  id,
  portion,
  price,
  product
}: Props) => {

  const [inOpen, setInOpen] = useState(false)
  const dispatch = useDispatch()


  const id:ProductItemm = product?.cardapio[0]?.id

  const addToCart = (productId: number) => {
    if (!product) return
    const item = product.cardapio.find((r) => r.id === productId)


  if (!item) return

  dispatch(add(item))
  dispatch(open())
}



  if (path === 'home') {
    return (
      <Card path='home' title={title} discription={discription}>
        <img src={image} alt="" />
        <Infos>
          {infos?.map((info ) => (
            <TagButton  key={info} type='link'>
              {info}
            </TagButton>
          ))}
        </Infos>
        <Border>
          <Div>
            <Title path='home' title={title} discription={discription}>{title}</Title>
            <div className='div'>
              <span>{star}</span>
              <img src={starImg} alt="" />
            </div>
          </Div>
          <Description path='home' title={title} discription={discription}>{discription}</Description>
          <TagButton to={`/restaurantes/${id}`} type={'link'}>
            {children}
          </TagButton>
        </Border>
      </Card>
    )
  }
  return (
    <>
      <Card path='perfil' title={title} discription={discription}>
        <img src={image} alt="" />
        <Title path='perfil' title={title} discription={discription}>{title}</Title>
        <Description path='perfil' title={title} discription={discription}>{discription}</Description>
        <Button onClick={() => setInOpen(true)}>{children}</Button>
      </Card>
      <PopUps className={inOpen === true ? 'visiby' : ''}>
        <Modal className='container'>
              <span onClick={() => setInOpen(false)} >
                <img src={close} alt="" />
              </span>
            <div className='close' >
              <img src={image}  />
              <div className='block'>
                <div>
                  <h3>{title}</h3>
                  <p>{discription}</p>
                </div>
                <div>
                  <p>Serve: de {portion}</p>
                  <Button onClick={() => addToCart(id)}>{`${childrenBtn}-${format(price as number)}`}</Button>
                </div>
              </div>
            </div>
        </Modal>
          <div className='overlay'></div>
      </PopUps>
    </>
  )
}

export default Product
