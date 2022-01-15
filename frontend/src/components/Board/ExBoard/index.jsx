import React from "react";
import * as S from "./style";

const ExBoard = () => {
  const notification = "msg";
  const time = 15;
  return (
    <S.Container>
      <S.NotifContainer>
        <S.NotifContent>{notification}</S.NotifContent>
        <S.NotifTime>{time}분 전</S.NotifTime>
      </S.NotifContainer>
    </S.Container>
  );
};

export default ExBoard;
