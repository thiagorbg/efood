import styled from 'styled-components'
import type { Props } from '.'

export const Grid = styled.div<Omit<Props, 'products'>>`
  display: grid;
  grid-template-columns: ${(Props) =>
    Props.path === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: 80px;
  margin-bottom: 120px;
`
