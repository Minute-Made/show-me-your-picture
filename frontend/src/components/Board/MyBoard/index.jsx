
import React, { useEffect, useState } from "react";

import PhotoModal from "../PhotoModal";
import * as S from "./style";
import axios from "axios";
import config from "../../../config/config";

const MyBoard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState();
  const user_id = props.params.userPk;
  const userToken = localStorage.getItem("UserId");
  const [isLoading, setIsLoading] = useState(true);
  console.log("user", userToken);
  const getPhoto = async () => {
    await axios
      .get(config.BASE_URL + "/pictures/" + user_id, {
        headers: { Authorization: `${userToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setPhoto(res.data);
      });
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(async () => {
    await getPhoto();
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <S.Container>
      {/* <S.Tab>내 사진첩</S.Tab> */}

      {photo &&
        photo.map((data) => {
          return (
            <S.PostContainer onClick={openModal}>
              <S.ImageContainer>
                <img
                  key={data.pictureid}
                  src={data.image}
                  alt={data.title}
                  object-fit="cover"
                  style={{ width: "100%" }}
                />
              </S.ImageContainer>
              <S.Title>{data.title}</S.Title>
              <PhotoModal showModal={showModal} closeModal={closeModal} />
            </S.PostContainer>
          );
        })}

    </S.Container>
  );
};

export default MyBoard;
