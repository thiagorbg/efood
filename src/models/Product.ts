class ProductItem {
  image: string
  infos: string[]
  title: string
  star: string
  starImg: string
  discription: string
  children: string
  id: number

  constructor(
    image: string,
    infos: string[],
    title: string,
    star: string,
    starImg: string,
    discription: string,
    children: string,
    id: number
  ) {
    this.image = image
    this.infos = infos
    this.title = title
    this.star = star
    this.starImg = starImg
    this.discription = discription
    this.children = children
    this.id = id
  }
}
export default ProductItem
