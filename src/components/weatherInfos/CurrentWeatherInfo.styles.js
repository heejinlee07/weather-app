import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 990px;
  /* padding: 70px; */
  padding: 70px 21px;
  margin: 0 auto;
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 10px;
  height: 672px;
`;

export const CurrentAreaInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 200px;
  padding: 30px;

  & > div {
    margin-top: 7px;
  }
`;

export const CurrentDayInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  padding: 10px;
  font-weight: bold;
`;

export const CurrentHourlyInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 130px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 7px;
  }
`;

export const Timezone = styled.div`
  font-weight: 700;
  font-size: 30px;
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
  font-size: 17px;
`;

export const CurrentTotalInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  padding: 10px;
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
  margin: 5px 0 5px 0;
`;

export const Input = styled.input``;
