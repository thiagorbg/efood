import styled from 'styled-components'
import { cores } from '../../style'
import type { Props } from '.'



export const Title = styled.h3<Omit<Props, 'image' | 'infos' | 'starImg' | 'star' | 'starImg' | 'children' |'childrenBtn'>>`
  font-size: 18px;
  color: ${Props => (Props.path === "home" ? `${cores.red}` : `${cores.white}`)};
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 16px;

`
export const Card = styled.div<Omit<Props, 'image' | 'infos' | 'starImg' | 'star' | 'starImg' | 'children' |'childrenBtn'>>`
  position: relative;
  margin-bottom: 40px;
  max-width: 472px;
  background-color: ${Props => (Props.path === "home" ? `${cores.white}` : `${cores.red}`)};;
  padding:${Props => (Props.path === "home" ? 'none' : '8px')};;
  img {
    width: 100%;
    display: block;
  }
`
export const Description = styled.p<Omit<Props, 'image' | 'infos' | 'starImg' | 'star' | 'starImg' | 'children' |'childrenBtn'>>`
  color:  ${Props => (Props.path === "home" ? `${cores.red}` : `${cores.white}`)};;
  font-size: 14px;
  padding-bottom: 16px;
  z-index: 5;
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
export const Button = styled.button`
  font-size: 14px;
  font-weight: bolder;
  color: ${cores.red};
  background-color: ${cores.white};
  width: 100%;
  border: none;
  padding: 4px;
`
