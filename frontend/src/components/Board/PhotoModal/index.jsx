import React from "react";

import * as S from "./style";

const PhotoModal = (props) => {
  return (
    <>
      {props.showModal ? (
        <S.Background>
          <S.CloseIcon onClick={props.closeModal}>
            <i className="fas fa-times"></i>
          </S.CloseIcon>
          <S.PhotoModal>
            <S.PhotoBox>{/* <img /> */}</S.PhotoBox>
            <S.ContentBox></S.ContentBox>
          </S.PhotoModal>
        </S.Background>
      ) : null}
    </>
  );

};

export default PhotoModal;
