import styled, { css, keyframe } from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const PhotoModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 20rem;
  height: 25rem;
  background-color: #aaa;
  text-align: center;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIcon = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  z-index: 101;
`;

export const PhotoBox = styled.div`
  width: 100%;
  height: 80%;
  background-color: #ffffff;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 20%;
  background-color: #f4f4f4;
`;
