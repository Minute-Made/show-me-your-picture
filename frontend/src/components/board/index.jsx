import React, { useEffect, useState } from "react";
import axios from "axios";
import modalBG from "../GlobalStyle";
import profImgF from "../../assets/profIMG.svg";
import MenuModal from "./MenuModal/index";
import AddModal from "./AddModal/index";
import { useRecoilValue, useRecoilState } from "recoil";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "./style.js";
import MyBoard from "./MyBoard/index";
// import { useUser } from "../../../hooks/useUser";
import { userState } from "../../atoms/atoms.js";
import ExBoard from "./ExBoard";

function Home() {
  const [open, setOpen] = useState(false);
  const [openBG, setOpenBG] = useState(false);
  const [plusModal, setPlusModal] = useState(false);
  const [tab, setTab] = useState("myBoard");

  const changeTabMy = () => {
    setTab("myBoard");
  };
  const changeTabEx = () => {
    setTab("exBoard");
  };
  const onToggle = () => {
    setOpen(!open);
    setOpenBG(!openBG);
  };
  const plusToggle = () => {
    setPlusModal(!plusModal);
    setOpenBG(!openBG);
  };
  const openBGHandler = () => {
    setOpenBG(!openBG);
  };
  return (
    <div style={{ diplay: "relative" }}>
      <S.BlackBG openBG={openBG}></S.BlackBG>
      <AddModal plusModal={plusModal}></AddModal>
      <MenuModal open={open}></MenuModal>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <S.Menu onClick={onToggle} open={open}>
          <span></span>
          <span></span>
          <span></span>
        </S.Menu>
      </div>
      <S.YBTOP></S.YBTOP>
      <S.TitleContainer>
        <div style={{ width: "27%" }}>
          <img src={profImgF} style={{ width: "100%" }}></img>
        </div>
        <S.TitleWrapper>
          <S.Title>김지성님의 흑역사진첩</S.Title>
          <S.Info>이것은 매우 간단한 한줄 소개</S.Info>
        </S.TitleWrapper>
      </S.TitleContainer>
      <S.TabWrapper>
        <S.MyTab onClick={changeTabMy} tab={tab}>
          내 사진첩
        </S.MyTab>
        <S.ExTab onClick={changeTabEx} tab={tab}>
          교환하기
        </S.ExTab>
      </S.TabWrapper>

      {tab == "myBoard" && <MyBoard onOpenBGHandler={openBGHandler} />}
      {tab != "myBoard" && <ExBoard />}
      {tab == "myBoard" && (
        <S.FixedAlign plusModal={plusModal}>
          <S.PlusButton onClick={plusToggle} plusModal={plusModal}>
            <i className="fas fa-plus"></i>
          </S.PlusButton>
        </S.FixedAlign>
      )}
    </div>
  );
}
export default Home;
