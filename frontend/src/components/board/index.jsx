import React, { useEffect, useState } from "react";
import axios from "axios";
import profImgF from "../../assets/profIMG.svg"
import { useRecoilValue, useRecoilState } from "recoil";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "./style.js";
// import { useUser } from "../../../hooks/useUser";
import { userState } from "../../atoms/atoms.js";

function Home() {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
  return(
    <>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
        <S.Menu  onClick={onToggle} open={open}>
            <span></span>
            <span></span>
            <span></span>
        </S.Menu>
    </div>
    <S.YBTOP></S.YBTOP>
    <S.TitleContainer>
        <div style={{ width: '27%'}}>
            <img src={profImgF} style={{width: '100%'}}></img>
        </div>
        <S.TitleWrapper>
            <S.Title>김지성님의 흑역사진첩</S.Title>
            <S.Info>이것은 매우 간단한 한줄 소개</S.Info>
        </S.TitleWrapper>
    </S.TitleContainer>
    </>   
  )
}
export default Home;