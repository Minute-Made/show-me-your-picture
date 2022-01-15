import React, { useEffect } from "react";
import axios from "axios";
import title from "../../../assets/LandingTitle.png"
import footerbg from "../../../assets/FooterBG.svg"
import { useRecoilValue, useRecoilState } from "recoil";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "../style.js";
import * as T from "./splash.js";
// import { useUser } from "../../../hooks/useUser";
import { userState } from "../../../atoms/atoms.js";

function Splash() {
  const history = useNavigate();
  // const { user, setUser } = useUser()
  const [ userStates, setUserStates ] = useRecoilState(userState);
  console.log(userStates)
  const logout = async () => {
    // await axios({
    //   method: "post",
    //   url: "http://localhost:8000/accounts/rest-auth/logout/",
    //   withCredentials: true,
    // })
    //   .then((res) => {
        // console.log(res);
        localStorage.removeItem("UserId");
        setUserStates(() => "none")
        history({pathname: "/"});
      // })
  };
  return(
    <>
      <T.Container>
          <S.TitleImg style={{width: "88%", marginTop:"12vh", marginBottom:"12vh"}}src={title}/>

          <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/login"><T.Button2 style={{width: '16.875rem'}}>시작하기</T.Button2></Link>

          {/* <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/signup"><S.Button2 style={{width: '270px'}}>회원가입</S.Button2></Link> */}
          
          <S.Button1 onClick={logout} type="button">
              Log Out
          </S.Button1>
          <img style={{width: "100%", position: "absolute", bottom: "0", maxWidth:"375px"}}src={footerbg}/>
      </T.Container>

      
    </>   
  )
}
export default Splash;