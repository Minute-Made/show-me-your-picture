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
    margin-right: 6%;
    margin-top: 20px;
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
export const YBTOP = styled.div`
    height: 20px;
`