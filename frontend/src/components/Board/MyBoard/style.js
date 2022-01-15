import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 88%;
  max-height: 60vh;
  height: auto;
  background-color: #f4f4f4;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  /* border: 0.5px solid #909090; */
  padding: 0.8rem;
  margin: 0 auto;
  /* margin-top: 100px; */
  display: grid;
  overflow: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
  align-items: space-between;

  z-index: 2;
`;

export const Tab = styled.div`
  width: 120px;
  height: 71px;
  left: 34px;
  padding: 1rem;
  transform: translateY(-50%);
  background: #f4f4f4;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  text-align: center;
  font-family: "NeoDunggeunmo Pro";
  font-size: 1rem;

  z-index: 1;
`;

export const PostContainer = styled.div`
  background-color: #ffffff;
  border: 0.5px solid #909090;
  height: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 90%;
  font-family: "NeoDunggeunmo Pro";
  font-size: 0.8rem;
`;
