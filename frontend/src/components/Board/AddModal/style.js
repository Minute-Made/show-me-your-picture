import styled, { css, keyframes} from "styled-components";

const slideUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-25%);
    }
    15% {
      opacity: 0;
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  `;
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
  z-index:7;
  border-radius:8px;
  ${props => props.plusModal && css`
     display:flex;
     animation-duration: 0.8s;
  animation-name: ${({ plusModal }) => plusModal && slideUp};
  `}
  
`
export const Title = styled.div`
        font-size: 1.2rem;
        margin-top: 20px;
        font-family: 'NeoDunggeunmo Pro';
`

