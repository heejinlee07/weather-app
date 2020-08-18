import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid gray;
  border-radius: 10px;
`;

export const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 350px;
`;

export const TimeInfo = styled.div`
  font-size: 45px;
  font-weight: bold;
`;

export const DateInfo = styled.div`
  font-size: 30px;
`;

export const Greeting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 18px;
`;

export const Input = styled.input`
  margin-right: 10px;
`;
