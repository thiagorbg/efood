import styled from 'styled-components'
import { cores } from '../../style'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  height: 190px;
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
  align-items: center;
`
export const LinkStyle = styled(Link)`
  color: ${cores.red};
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
`
