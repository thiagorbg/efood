import styled from 'styled-components'
import { breakpoints, cores } from '../../style'

export const HeroBackgrond = styled.div`
  height: 384px;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }
`
export const P = styled.p`
  color: ${cores.red};
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  @media (max-width: ${breakpoints.tablet}) {
  font-size: 30px;
  }
`
export const EfoodIcon = styled.div`
  padding-top: 64px;

  img {
    display: block;
    margin: 0 auto;
    padding-bottom: 150px;
  }
`
