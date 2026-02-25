import TagButton from '../Tag'

import { Title, Description, Card, Border, Infos, Div, Button } from './style'

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
  childrenBtn
}: Props) => {
  if (path === 'home') {
    return (
      <Card path='home' title={title} discription={discription}>
        <img src={image} alt="" />
        <Infos>
          {infos?.map((info) => (
            <TagButton key={info} type={'tag'}>
              {info}
            </TagButton>
          ))}
        </Infos>
        <Border>
          <Div>
            <Title path='home' title={title} discription={discription}>{title}</Title>
            <div>
              <span>{star}</span>
              <img src={starImg} alt="" />
            </div>
          </Div>
          <Description path='home' title={title} discription={discription}>{discription}</Description>
          <TagButton to="/perfil" type={'link'}>
            {children}
          </TagButton>
        </Border>
      </Card>
    )
  }
  return (
    <Card path='perfil' title={title} discription={discription}>
      <img src={image} alt="" />
      <Title path='perfil' title={title} discription={discription}>{title}</Title>
      <Description path='perfil' title={title} discription={discription}>{discription}</Description>
      <Button>{childrenBtn}</Button>
    </Card>
  )
}

export default Product
