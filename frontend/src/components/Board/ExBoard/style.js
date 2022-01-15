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
  flex-direction: row;
  align-items: space-between;
`;

export const NotifContainer = styled.div`
  background-color: #ffffff;
  border: 0.5px solid #909090;
  width: 90%;
  height: 162px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
