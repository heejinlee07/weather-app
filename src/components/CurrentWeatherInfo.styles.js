import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 70px 210px;
  margin: 0;
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 10px;
`;

export const CurrentAreaInfo = styled.div`
  /* background: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

export const CurrentDayInfo = styled.div`
  /* background: skyblue; */
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

export const CurrentHourlyInfo = styled.div`
  display: flex;
  flex-direction: row;
  /* background: beige; */
  width: 500px;
  height: 100px;
  overflow-x: scroll;
`;

export const CurrentDayName = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
`;

export const CurrentDayTemp = styled.div`
  display: flex;
  width: 50px;
  justify-content: space-between;
`;

export const CurrentDescription = styled.div`
  padding: 10px;
  margin-top: 10px;
`;

export const CurrentTotalInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
`;

export const CurrentTotalSunrise = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const CurrentTotalSunset = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const CurrentTotalText = styled.div`
  font-size: 14px;
  color: gray;
  margin-top: 10px;
`;
