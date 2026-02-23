class ProductItem {
  image: string
  infos?: string[]
  title: string
  star?: string
  starImg?: string
  discription: string
  children?: string
  id: number
  childrenBtn?: string

  constructor(
    image: string,
    title: string,
    discription: string,
    id: number,
    children?: string,
    infos?: string[],
    star?: string,
    starImg?: string,
    childrenBtn?: string
  ) {
    this.image = image
    this.infos = infos
    this.title = title
    this.star = star
    this.starImg = starImg
    this.discription = discription
    this.children = children
    this.id = id
    this.childrenBtn = childrenBtn
  }
}
export default ProductItem
