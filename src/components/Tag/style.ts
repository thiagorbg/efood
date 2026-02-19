import styled from 'styled-components'
import { cores } from '../../style'
import { Link } from 'react-router-dom'

export const TagContainer = styled.div`
  background-color: ${cores.red};
  color: ${cores.white};
  font-size: 14px;
  font-weight: bold;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.red};
  color: ${cores.white};
  font-size: 12px;
  font-weight: bold;
`
