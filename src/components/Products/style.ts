import styled from 'styled-components'
import type { Props } from '.'
import { cores } from '../../style'



export const Title = styled.h3<Omit<Props, 'image' | 'infos' | 'starImg' | 'star' | 'starImg' | 'children' |'childrenBtn'| 'id'>>`
  font-size: 18px;
  color: ${Props => (Props.path === "home" ? `${cores.red}` : `${cores.white}`)};
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 16px;


`
export const Card = styled.div<Omit<Props, 'image' | 'infos' | 'starImg' | 'star' | 'starImg' | 'children' |'childrenBtn' | 'id'>>`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 472px;
  width: 100%;
  position: ${Props => (Props.path === 'home' ? 'relative' : 'none')};
  background-color: ${Props => (Props.path === "home" ? `${cores.white}` : `${cores.red}`)};;
  padding:${Props => (Props.path === "home" ? 'none' : '8px')};;
  img {
    width: 100%;
    height: 217px;
    display: block;
    object-fit: cover;
  }
`
export const Description = styled.p<Omit<Props, 'image' | 'infos' | 'starImg' | 'star' | 'starImg' | 'children' |'childrenBtn'| 'id'>>`
  color:  ${Props => (Props.path === "home" ? `${cores.red}` : `${cores.white}`)};;
  font-size: 14px;
  padding-bottom: 16px;

`
export const Border = styled.div`
  border: 1px solid ${cores.red} ;
  padding-left: 8px;
  padding-bottom: 11px;
  width: 100%;
  max-height: 175px;
  height: 100%;

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
    justify-content: center;
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
  margin: 0;
`
export const PopUps = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1024px;
  height: 344px;
  width: 100%;
  height: 100%;
  display: none;
  color: ${cores.white};
  justify-content: center;
  align-items: center;

  &.visiby {
    display: flex;
  }

  .close {
    display: flex;
  }

  span {
      display: flex;
      justify-content: end;
      align-items: end;
      top: 0;
    img {
      height: 16px;
      width: 16px;
    }
  }

  .block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 60px;
    width: 656px;
    margin-left: 10px;
  }

  .overlay {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.65);
  }

  img {
    width: 280px;
    height: 280px;
  }
`
export const Modal = styled.div`
  background-color: ${cores.red};
  padding: 12px 32px 32px 32px;
  z-index: 1;
  display: block;

  div {

    h3 {
      font-size: 18px;
      font-weight: bolder;
      margin-bottom: 16px;
    }
    ${Button} {
      width: 218px;
      margin-top: 16px;
    }
  }
`

