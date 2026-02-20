import styled from 'styled-components'
import { cores } from '../../style'
import TagButton from '../Tag'

export const Title = styled.h3`
  font-size: 18px;
  color: ${cores.red};
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 16px;
`
export const Card = styled.div`
  position: relative;
  margin-bottom: 40px;
  max-width: 472px;
  img {
    width: 100%;
    display: block;
  }
`
export const Description = styled.p`
  color: ${cores.red};
  font-size: 14px;
  padding-bottom: 16px;
`
export const Border = styled.div`
  border-style: solid;
  border-color: ${cores.red};
  border-width: 0px 1px 1px 1px;
  padding-left: 8px;
  padding-bottom: 11px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 20px;
    width: 20px;
    margin-right: 8px;
    margin-left: 8px;
  }
  div {
    display: flex;
    align-items: center;
  }
`
