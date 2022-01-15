import React from "react";
import Img from "../../../assets/sampleImg.png";
import * as S from "./style";

const MyBoard = () => {
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
