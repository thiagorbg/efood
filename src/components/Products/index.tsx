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
      <Card>
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
            <Title>{title}</Title>
            <div>
              <span>{star}</span>
              <img src={starImg} alt="" />
            </div>
          </Div>
          <Description>{discription}</Description>
          <TagButton to="/perfil" type={'link'}>
            {children}
          </TagButton>
        </Border>
      </Card>
    )
  }
  return (
    <Card>
      <img src={image} alt="" />
        <Title>{title}</Title>
        <Description>{discription}</Description>
        <Button>{childrenBtn}</Button>
    </Card>
  )
}

export default Product
