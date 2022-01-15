import React, { useEffect, useState } from "react";
import axios from "axios";
import modalBG from "../GlobalStyle";
import profImgF from "../../assets/profIMG.svg";
import MenuModal from "./MenuModal/index";
import AddModal from "./AddModal/index";
import { useRecoilValue, useRecoilState } from "recoil";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import * as S from "./style.js";
import MyBoard from "./MyBoard/index";
// import { useUser } from "../../../hooks/useUser";
import { userState } from "../../atoms/atoms.js";
import ExBoard from "./ExBoard";
import config from "../../config/config.js"

function Home() {
  const params = useParams();
  const [nickname, setNick] = useState(false);
  const [gender, setGender] = useState(false);
  const [description, setDesc] = useState(false);
//   console.dir(params.userPk)
  const getProfile = async () =>  {
    await axios.get( config.BASE_URL+ "/accounts/" + params.userPk)
  .then((res)=> {
    console.log(res.data)
    setNick(res.data.nickname)
    setGender(res.data.gender)
    setDesc(res.data.description)
  })
  }
  useEffect(async() => {
    await getProfile();
}, []);

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

  return (
    <div style={{ diplay: "relative" }}>
      <S.BlackBG openBG={openBG}></S.BlackBG>

      {plusModal && <AddModal params={params}></AddModal>}

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
          <S.Title>{nickname}님의 흑역사진첩</S.Title>     
          <S.Info>{description}</S.Info>
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

      {tab == "myBoard" && <MyBoard params={params} />}
      {tab != "myBoard" && <ExBoard params={params} />}
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
