import styled from "styled-components";
import { breakpoints, cores } from "../../style";
import fechar from '../../assets/images/lixeira-de-reciclagem.png'


export const ContainerTag = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

`
export const NavBar= styled.div`
  background-color: ${cores.red};
  padding: 32px 8px 8px 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 260px;
    .title {
      font-size: 12px;
    }
  }

  button {
    width: 100%;
    padding: 4px;
    color: ${cores.red};
    font-size: 14px;
    font-weight: bold;
    border: none;
  }
`

export const Overlay = styled.div`
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: #000;
opacity: 0.7;
position: absolute;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.white};
  padding: 8px 8px 12px 8px;
  color: ${cores.red};
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  div {
    padding-left: 8px;

  }
  h3 {
    font-size: 18px;
    margin-bottom: 16px;
    color: ${cores.red};
  }
  p {
    font-size: 14px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;

  }
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
  color: ${cores.white2};
  font-weight: bold;
`
