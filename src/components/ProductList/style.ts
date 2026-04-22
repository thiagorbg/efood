import styled from 'styled-components'
import type { Props } from '.'
import { breakpoints } from '../../style'

export const Grid = styled.div<Omit<Props, 'products'| 'childrenBtn' | 'children' >>`
  display: grid;
  grid-template-columns: ${(Props) =>
    Props.path === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: 80px;
  margin-bottom: 120px;

  @media ( max-width:${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

`
