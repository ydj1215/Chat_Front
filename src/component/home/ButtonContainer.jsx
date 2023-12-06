import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  /*
  flex 아이템들이 여분의 공간을 동일하게 나누어 가지고,
  공간이 부족하면 동일하게 줄어들며, 아이템의 기본 크기는 0으로 설정하라는 뜻
  */
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  margin: 20px;
  color: orangered;
`;

export const TransBtn = styled.button`
  margin: 10px;
  flex: 1;
  min-width: 360px;
  height: 70px;
  background: transparent;
  border: 2px solid white; // 기본색상
  font-family: "Noto Sans KR", sans-serif;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #888;

  ${(props) =>
    props.color &&
    css`
      flex: 1;
      max-width: 200px;
      min-width: 140px;
      background: ${props.color};
    `};

  &:hover {
    background-color: #555;
    color: #eee;
  }
  &:active {
    background-color: #0056b3; // 활성화 상태에서의 색상
    border-color: #aaa;
  }
`;
