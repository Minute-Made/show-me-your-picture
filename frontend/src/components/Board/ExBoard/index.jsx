import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../config/config";

import * as S from "./style";

const ExBoard = (props) => {
  const [notif, setNotif] = useState();
  const user_id = props.params.userPk;
  const userToken = localStorage.getItem("UserId");
  const [isLoading, setIsLoading] = useState(true);

  const getNotif = async () => {
    await axios
      .get(config.BASE_URL + "/notifications/" + user_id)
      .then((res) => {
        console.log(res.data);
        setNotif(res.data);
      });
  };

  useEffect(async () => {
    await getNotif();
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <div>로딩 중</div>;
  }
  // const notification = "msg";
  // const time = 15;
  return (
    <S.Container>
      {notif &&
        notif.map((data) => {
          return (
            <S.NotifContainer>
              <S.NotifContent>{data.requestee_nickname}이(가)   </S.NotifContent>
              <S.NotifTime>15분 전</S.NotifTime>
            </S.NotifContainer>
          );
        })}
    </S.Container>
  );
};

export default ExBoard;