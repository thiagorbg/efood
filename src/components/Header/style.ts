import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, cores } from '../../style'

export const Container = styled.header`
  height: 190px;
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    .img {
      margin: 0 16px;
    }
  }
`
export const LinkStyle = styled(Link)`
  color: ${cores.red};
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
`
