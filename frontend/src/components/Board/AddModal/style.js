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
export const Button = styled.button`
  width: 70%;
  height: 56px;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  // font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-family: "NeoDunggeunmo Pro";
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 80px;
  background: rgba(34, 34, 34, 0.5);
  color: white;
  &:hover {
    background-color: #eee;
    color: rgba(34, 34, 34, 0.5);
    transition: all ease 0.5s;
  }
  border-style: none;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`;
export const ModalBG = styled.div`
  width: 88%;
  /* margin: 0 auto; */
  display:flex;
  align-items: center;
  flex-direction: column;
  background-color: #EEEEEE;
  height:80vh;
  top:10vh;
  position: absolute;
  z-index:7;
  border-radius:8px;

  display:flex;
`
export const Title = styled.div`
        font-size: 1.2rem;
        margin-top: 20px;
        font-family: 'NeoDunggeunmo Pro';
`

