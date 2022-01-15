import React, { useEffect, useState } from "react";
import axios from "axios";
// import { browserHistory } from 'react-router';
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";
// import { useUser } from "../../../hooks/useUser";
// import { userState } from "../../atoms/atoms.js";

function AddModal( props ) {
    // const [files, setFiles] = useState('')
    const user_id = props.params.userPk

    // const location = browserHistory.getCurrentLocation();
    // const addPhoto = async () => {
    //     const formdata = new FormData();
    //     formdata.append('image', files[0])
    //     formdata.append('title', files[1])
    //     formdata.append('description', files[2])
    //     formdata.append('author', files[3])

    //     axios({
    //     // headers: {
    //     //     'content-type': 'multipart/form-data',
    //     // },
    //       method: "post",
    //       url: `http://localhost:8000/pictures/${user_id}/`,
    //     //   url: `http://localhost:8000/pictures/`,
    //       data: formdata,
    //       withCredentials: true,
    //     }).then((res) => {
    //         console.log(res)
    //       })
    //       .catch((err) => {
    //         alert("작성 실패")
    //         console.log(err)
    //         console.dir(err)
    //       })};
    const onSubmit = (e) => {
        e.preventDefault();
        
        const upload_file = e.target[0].files[0];
        const title = e.target[1].value;
        const desc = e.target[2].value;
        const author = e.target[3].value;
        const formData = new FormData();
        formData.append("image", upload_file)
        formData.append("title", title)
        formData.append("description", desc)
        formData.append("author", author)
        const URL = "http://localhost:8000/pictures/"

        axios({
            method:"post",
            url: URL + user_id +'/',
            data: formData,
            headers:{
                "Content-Type" : "multipart/form-data"
            }
        }).then((res) => {
            console.log(res)
          })
          .catch((err) => {
            alert("작성 실패")
            console.log(err)
            console.dir(err)
          })};
        // const photoInfo = { 
        //   "image": e.target.image,
        //   "title": e.target.title.value, 
        //   "description": e.target.description.value, 
        //   "author": e.target.author.value, 
        // };
        // console.log(photoInfo)

    //   };
    return(
    <>  
        <S.ModalContainer>
            <S.ModalBG>
                <form encType='multipart/form-data' onSubmit={onSubmit}>
                <S.Title>사진을 설명해주세요</S.Title>
                <input type="file" id="image" name="image"></input>
                <input type="text" id="title" name="title"></input>
                <input type="text" id="description" name="description"></input>
                <input type="text" id="author" name="author"></input>
                <S.Button type="submit">제출</S.Button>
                </form>
                {/* <S.Title>사진을 설명해주세요</S.Title> */}
            </S.ModalBG>
        </S.ModalContainer>
    </>)

}
export default AddModal;