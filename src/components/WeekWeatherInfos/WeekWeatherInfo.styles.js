import styled from "styled-components";

export const WeekWrapper = styled.div`
  display: flex;
`;

export const WeekWeatherBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid gray;
  border-radius: 10px;
  width: 70px;
  margin: 20px 5px 0;
`;

export const WeekWeatherInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeekWeatherTemp = styled.div`
  display: flex;
`;
