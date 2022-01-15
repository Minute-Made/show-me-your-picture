import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyleWrapper = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    padding: 0;
    margin: 0;
  }

  body { 
    padding: 0;
    margin: 0;
  }
`;
export const BlackBG= styled.div`
${props =>
    props.menuModal &&
    css`
    height: 100%;
    width: 100%;
    background-color: rgba(34, 34, 34, 0.7);
    // position:fixed;
    position: fixed;
    transition: all .4s;
    transform:translateX()
    `}
`
const Container = styled.div`
  position: relative;
  background-color: #e6e9ec;
  display:flex;
  justify-content: center;
  // min-height: 100vh;
  // @media (min-width: 375px) {
    
  // }
`;

const Body = styled.div`
  max-width: 375px;
  width: 100%;
  // margin: 0 auto;
  background-color: #FFAB76;
  min-height: 100vh;
  // @media (min-width: 375px) {
    
  // }
`;

function GlobalStyle({ children }) {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>
        <Body>{children}</Body>
      </Container>
    </>
  );
}

export default GlobalStyle;