import React, { useState } from "react";
import Img from "../../../assets/sampleImg.png";
import PhotoModal from "../PhotoModal";
import * as S from "./style";

const MyBoard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <S.Container>
      <S.PostContainer onClick={openModal}>
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

      {/* <S.BlackBG /> */}
      <PhotoModal showModal={showModal} closeModal={closeModal} />
    </S.Container>
  );
};

export default MyBoard;
