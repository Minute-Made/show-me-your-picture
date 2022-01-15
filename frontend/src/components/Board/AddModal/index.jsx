import React, { useEffect, useState } from "react";
// import modalBG from "../GlobalStyle"
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";
// import { useUser } from "../../../hooks/useUser";
// import { userState } from "../../atoms/atoms.js";

function AddModal(props) {
    return(
    <>  
        <S.ModalContainer>
            <S.ModalBG plusModal={props.plusModal}>
                <div>사진을 설명해주세요</div>
            </S.ModalBG>
        </S.ModalContainer>
    </>)

}
export default AddModal;