import { React, useState, useEffect } from "react";
import {  useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as S from "../style.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../../atoms/atoms.js";
import footerbg from "../../../assets/FooterBG.svg"
function Login() {
  const history = useNavigate();
  const [ userStates, setUserStates ] = useRecoilState(userState);
  const [ error, setError ] = useState();
  const userToken = localStorage.getItem("UserId");

  const login = async (loginInfo) => {
    await axios({
      method: "post",
      url: "http://localhost:8000/accounts/login/",
      // url: "/accounts/rest-auth/login/",
      data: loginInfo,
      withCredentials: true,
    })
      .then((res) => {
        // sessionStorage.setItem("isAuthorized", "true");
        console.log(res)
        localStorage.setItem("UserId", 'Token ' + res.data.Token);
        // console.log()
        // localStorage.setItem("ZakSimId", res);
        setUserStates(res.data.key);
      })
      .catch((err) => {
        // if(err.response.status==401 && err.response.data=="Unauthorized"){
        if(err.response.status==401){
          // alert("아이디 혹은 패스워드가 잘못되었습니다.");
          setError("아이디 혹은 패스워드가 잘못되었습니다.");
        }
        console.dir(err)
        console.log(loginInfo)
      });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const loginInfo = { 
      "id": e.target.id.value,
      "password": e.target.pwd.value 
    };
    console.log(loginInfo)
    return login(loginInfo);
  };

  const goBack = () => {
    history(-1);
  };

  useEffect(() => {
    // if(userStates != "none"){
    if(userToken){
      history({
        pathname: "/home"
      })
    }
  }, [userStates])

  return (
    <>
      <S.Container>
        <S.Circle >
          <i onClick={goBack} className="fas fa-arrow-left"></i>
        </S.Circle>
        <S.Title>로그인</S.Title>

        <form onSubmit={onSubmit}>
          <S.InputWrapper>
            <S.InputID
              required type="text"
              id="id"
              name="id"
              placeholder="아이디"
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.InputPW
              type="password"
              id="pwd"
              name="pwd"
              placeholder="비밀번호"
              required
            />
          </S.InputWrapper>
          <div style={{color: 'red', textAlign: 'center'}}>{error}</div>
          <S.YB />
          <S.ButtonWrapper>
            <S.Button type="submit">로그인</S.Button>
            <br/>

            <S.Button2 onClick= {() => history('/auth/signup')}>회원가입</S.Button2>

          </S.ButtonWrapper>
          
        </form>
        
      </S.Container>
      <img  style={{width: "100%", position: "absolute", bottom: "0", maxWidth:"375px"}} src={footerbg}/>
    </>
  );
}

export default Login;