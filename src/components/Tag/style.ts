import styled from 'styled-components'
import { cores } from '../../style'
import { Link } from 'react-router-dom'
import type { props } from '.'

export const TagContainer = styled.div<props>`
  background-color: ${cores.red};
  color: ${cores.white};
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  padding: ${(Props) => (Props.type === 'link' ? '6px 4px' : '4px 6px')};
`
export const ButtonLink = styled(Link)<props>`
  background-color: ${(props) =>
    props.color === 'red' ? 'transparent' : '#E66767'};
  color: ${(props) => (props.color === 'red' ? '#E66767' : '#FFF8F2')};
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  padding: ${(Props) => (Props.type === 'link' ? '4px 6px' : '6px 4px')};
`
