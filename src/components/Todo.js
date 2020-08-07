import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-top: 80px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
`;
export default function Todo() {
  return (
    <Wrapper>
      <h2>오늘의 할 일</h2>
      <div>밥먹기</div>
      <div>집에가기</div>
      <div>잠자기</div>
    </Wrapper>
  );
}
