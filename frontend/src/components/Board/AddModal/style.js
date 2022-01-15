import styled, { css, keyframes} from "styled-components";

export const ModalContainer = styled.div`
  max-width: 375px;
  width: 100%;
  position: relative;
  display:flex;
  justify-content: center;
`
export const ModalBG = styled.div`
  width: 88%;
  /* margin: 0 auto; */
  display:flex;
  align-items: center;
  flex-direction: column;
  background-color: #EEEEEE;
  height:80vh;
  display: none;
  top:10vh;
  position: absolute;
  z-index:3;
  ${props => props.plusModal && css`
     display:flex;
  `}
`
export const Title = styled.div`
  max-width: 375px;
  width: 100%;
  position: relative;
  display:flex;
  justify-content: center;
  `