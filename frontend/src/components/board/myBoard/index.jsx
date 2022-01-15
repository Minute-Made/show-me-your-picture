import React,{  useEffect,useState } from "react";
import Img from "../../../assets/sampleImg.png";
import * as S from "./style";
import axios from "axios";
import config from "../../../config/config";
const MyBoard = (props) => {
    const [photo, setPhoto] = useState();
    const user_id = props.params.userPk
    const userToken = localStorage.getItem("UserId");
    const [isLoading, setIsLoading] = useState(true);
    console.log("user", userToken)
    const getPhoto = async () =>  {
        await axios.get( config.BASE_URL+ "/pictures/" + user_id, {
            headers:{ 'Authorization':`${userToken}`}
        }
        )
    .then((res)=> {
        console.log(res.data)
         setPhoto(res.data);
      })
     
  }
  useEffect(async() => {
    await getPhoto();
    setIsLoading(false);
}, []);
  if(isLoading){
    return <div>로딩중...</div>
}

  return (
    <S.Container>
      {/* <S.Tab>내 사진첩</S.Tab> */}
      {photo && photo.map(data => {
                return (
                <S.PostContainer>
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
                  </S.PostContainer>
                ) } ) }

    </S.Container>
  );
};

export default MyBoard;
