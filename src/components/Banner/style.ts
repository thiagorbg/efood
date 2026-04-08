import styled from 'styled-components'

export const Image = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 280px;
  color: white;
  font-size: 32px;
  margin-bottom: 56px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  h2 {
    margin-bottom: 124px;
    /* font-size: 32px; */
    font-weight: lighter;
    z-index: 1;
    position: relative;
  }

  h3 {
    z-index: 1;
    position: relative;
    /* font-size: 32px; */
  }
`
