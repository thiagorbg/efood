import { ButtonLink, TagContainer } from './style'

type props = {
  children: string
  type: 'link' | 'tag'
  to?: string
}

const TagButton = ({ children, type ,to }: props) => {
  if (type === 'link') {
    return <ButtonLink to={to as string}>{children}</ButtonLink>
  }
  return <TagContainer>{children}</TagContainer>
}
export default TagButton
