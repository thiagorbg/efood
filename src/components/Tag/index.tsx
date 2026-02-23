import { ButtonLink, TagContainer } from './style'

export type props = {
  children: string
  type: 'link' | 'tag'
  to?: string
  color?: 'red' | 'white'
}

const TagButton = ({ children, type, to, color }: props) => {
  if (type === 'link') {
    return (
      <ButtonLink type="link" color="white" to={to as string}>
        {children}
      </ButtonLink>
    )
  }
  return <TagContainer type={'tag'}>{children}</TagContainer>
}
export default TagButton
