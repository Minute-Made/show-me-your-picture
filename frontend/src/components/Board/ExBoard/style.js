import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 88%;
  max-height: 60vh;
  height: auto;
  background-color: #f4f4f4;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 0.8rem;
  margin: 0 auto;

  display: flex;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NotifContainer = styled.div`
  background-color: #ffffff;
  border: 0.5px solid #909090;
  width: 100%;
  height: 2rem;
  margin: 0.3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NotifContent = styled.p`
  font-family: "NeoDunggeunmo Pro";
  font-size: 0.8rem;
  margin: 0;
`;

export const NotifTime = styled.p`
  font-family: "NeoDunggeunmo Pro";
  font-size: 0.2rem;
  color: #aaaaaa;
  margin: 0;
`;
