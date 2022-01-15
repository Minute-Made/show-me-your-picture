import React, { useEffect } from "react";
import axios from "axios";
import profImgF from "../../assets/profIMG.svg"
import { useRecoilValue, useRecoilState } from "recoil";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "./style.js";
// import { useUser } from "../../../hooks/useUser";
import { userState } from "../../atoms/atoms.js";

function Home() {
  return(
    <>
    <S.YBTOP></S.YBTOP>
    <S.TitleContainer>
            <img src={profImgF} style={{width: '27%'}}></img>
        <S.TitleWrapper></S.TitleWrapper>
    </S.TitleContainer>
    </>   
  )
}
export default Home;