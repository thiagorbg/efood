import { createGlobalStyle } from 'styled-components'

export const cores = {
  red: '#E66767',
  white: '#FFEBD9',
  white2: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto , sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.white2};
  }

  .container {
    display: block;
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;

    @media (max-width: ${breakpoints.desktop} ) {
      max-width: 80%;
    }
  }
  .center {
    padding-top: 26px;
    padding-bottom: 32px;

  }
`
