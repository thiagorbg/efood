import TagButton from '../Tag'

import { Title, Description, Card, Border, Infos, Div } from './style'

type Props = {
  image: string
  infos?: string[]
  title: string
  star: string
  starImg: string
  discription: string
  children: string
}

const Product = ({
  image,
  starImg,
  children,
  discription,
  star,
  title,
  infos
}: Props) => (
  <Card>
    <img src={image} alt="" />
    <Infos>
      {infos?.map((info) => (
        <TagButton key={info} type={'tag'}>{info}</TagButton>
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
      <TagButton to='/perfil' type={'link'}>{children}</TagButton>
    </Border>
  </Card>
)

export default Product
