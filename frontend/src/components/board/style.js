import styled, { css, keyframes} from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 0 30px 0 30px;
  margin: 0 auto;
  display:flex;
  justify-content: center;
  flex-direction: column;

`
export const TopNavBar = styled.div`

`
export const Menu = styled.div`
    width: 25px;
    height: 23px;
    position: relative;
    transition: all .4s;
    box-sizing: border-box;
    margin-left: 6%;
    margin-top: 20px;
    z-index: 11;
    cursor: pointer;
    &:hover span {
        background-color: #fff;
    }
    span {
        display: inline-block;
        transition: all .4s;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #575F67;
        border-radius: 4px;
    }
    span:nth-of-type(1) {
        top: 0;
      }
    span:nth-of-type(2) {
        top: 9px;
    }
    span:nth-of-type(3) {
        bottom: 0;
    }
    ${props =>
        props.open &&
        css`
        span {
            background-color:#ff8787; 
        }
        span:nth-of-type(1) {
            -webkit-transform : translateY(20px) rotate(-315deg);
            transform : translateY(9.5px) rotate(-315deg);
          }
          span:nth-of-type(2) {
            opacity : 0;
          }
          span:nth-of-type(3) {
            -webkit-transform : translateY(-20px) rotate(315deg);
            transform : translateY(-9.5px) rotate(315deg);
          }
    `}
`
export const TitleContainer = styled.div`
    width: 88%;
    height: 120px;
    background-color: #f4f4f4;
    margin: 0 auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const TitleWrapper = styled.div`
    width: 56%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
export const Title = styled.div`
    width: 100%;
    font-size: 1.125rem;
    font-family: 'NeoDunggeunmo Pro';
    white-space:nowrap;
    margin-bottom: 20px;
`
export const Info = styled.div`
    width: 100%;
    font-size: 0.75rem;
    font-family: 'NeoDunggeunmo Pro';
    color: #A7B0C0;
`
const opacity = keyframes`
    0% {
      opacity: 0;
    //   transform: translateX(-50%);
    }
    15% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    //   transform: translateX(0);
    }
  `;
export const MenuModal = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    z-index: 9;
    flex-direction: column;
    div {
        font-size: 0.8rem;
        font-family: 'NeoDunggeunmo Pro';
    }
${props =>
        props.open &&
        css`
    background-color: #eee;
    width: 180px;
    height:100%;
    position: absolute;
    // left: 0;
    `}
    animation-duration: 0.8s;
    animation-name: ${({ open }) => open && opacity};
`
export const BlackBG= styled.div`
z-index: 6;
${props =>
    props.openBG &&
    css`
    height: 100%;
    width: 100%;
    background-color: rgba(34, 34, 34, 0.7);
    position: absolute;
    left:0;
    `}
`

export const YBTOP = styled.div`
    height: 20px;
`
export const PlusButton = styled.div`
color:white;
width: 3.75rem;
height: 3.75rem;
display: flex;
border-radius: 60px;
background:#8E806A;
align-items: center;
cursor: pointer;
justify-content: center;
font-size: 1.5rem;
pointer-events: all;
box-shadow: 2px 2px 3px #999;
transition: all ease 1s;
&:hover {
  color:#8E806A;
  background: #eee;
  & i {
    transform: rotate( 360deg );
    transition: all ease 1s;
    // color:red;
  }
}
${props =>
    props.plusModal &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform:  translate(-0%, 50%) rotate(45deg);
    `}
`;
export const FixedAlign = styled.div`
  width: 100%;
  z-index:5;
  max-width: 375px;
  // height: 60px;
  display: flex;
  position: fixed;
  margin: 0 auto;
  position: fixed;
  bottom: 10vh;
  justify-content: center;
  pointer-events: none;
  transition: all ease 1s;
  ${props =>
    props.plusModal &&
    css`
      bottom:10vh;
      z-index:30;
    `}
`
export const MMMenu = styled.div`
    display:none;
    z-index: 10;
  ${props =>
    props.open &&
    css`
      display:flex;
    `}
`
export const TabWrapper = styled.div`
    display:flex;
    width: 88%;
    height: 42px;
    justify-content: space-between;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
`
export const MyTab = styled.div`
    width: 40%;
    height: 42px;
    background-color: #909090;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.25);
    font-family: 'NeoDunggeunmo Pro';
    cursor: pointer;
    ${props =>
    props.tab == 'myBoard' &&
    css`
      background-color: #f4f4f4;
    `}
`
export const ExTab = styled.div`
    cursor: pointer;
    width: 40%;
    height: 42px;
    background-color: #909090;
    display:flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.25);
    font-size: 0.8rem;
    font-family: 'NeoDunggeunmo Pro';
    ${props =>
    props.tab != 'myBoard' &&
    css`
      background-color:#f4f4f4 ;
    `}
`
