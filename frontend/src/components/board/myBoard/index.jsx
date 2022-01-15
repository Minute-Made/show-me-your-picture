import React from "react";
import Img from "../../../assets/sampleImg.png";
import * as S from "./style";
import axios from "axios";
const MyBoard = (props) => {
    const user_id = props.params.userPk
    const userToken = localStorage.getItem("UserId");
    // const getPhoto = async ({userToken, user_id}) => {

    //     axios({
    //       method: "get",
    //       url: `http://localhost:8000/pictures/${user_id}/`,
    //     //   url: `http://localhost:8000/pictures/`,

    //       withCredentials: true,
    //     }).then((res) => {
    //         console.log(res)
    //       })
    //       .catch((err) => {
    //         alert("작성 실패")
    //         console.log(err)
    //       })};
  return (
    <S.Container>
      {/* <S.Tab>내 사진첩</S.Tab> */}
      <S.PostContainer>
        <S.ImageContainer>
          <img
            src={Img}
            alt="샘플이미지"
            object-fit="cover"
            style={{ width: "100%" }}
          />
        </S.ImageContainer>
        <S.Title>헤이리_01</S.Title>
      </S.PostContainer>
      <S.PostContainer>
        <S.ImageContainer>
          <img
            src={Img}
            alt="샘플이미지"
            object-fit="cover"
            style={{ width: "100%" }}
          />
        </S.ImageContainer>
        <S.Title>헤이리_01</S.Title>
      </S.PostContainer>
      <S.PostContainer>
        <S.ImageContainer>
          <img
            src={Img}
            alt="샘플이미지"
            object-fit="cover"
            style={{ width: "100%" }}
          />
        </S.ImageContainer>
        <S.Title>헤이리_01</S.Title>
      </S.PostContainer>
      <S.PostContainer>
        <S.ImageContainer>
          <img
            src={Img}
            alt="샘플이미지"
            object-fit="cover"
            style={{ width: "100%" }}
          />
        </S.ImageContainer>
        <S.Title>헤이리_01</S.Title>
      </S.PostContainer>
    </S.Container>
  );
};

export default MyBoard;
