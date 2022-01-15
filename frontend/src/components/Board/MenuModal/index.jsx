import React, { useEffect, useState } from "react";
// import modalBG from "../GlobalStyle"
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "../style";
// import { useUser } from "../../../hooks/useUser";
// import { userState } from "../../atoms/atoms.js";

function MenuModal(props) {
    return(<>
            {/* <modalBG menuModal={menuModal}></modalBG> */}

    <S.MenuModal open={props.open}>
        <S.MMMenu  open={props.open}>내 정보 수정</S.MMMenu>
        <S.MMMenu  open={props.open}>나의 컬렉션</S.MMMenu>
    </S.MenuModal>
    </>)

}
export default MenuModal;

