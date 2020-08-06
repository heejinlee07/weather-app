import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 10px;
`;

const DailyList = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
`;

const DailyTemp = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    margin-right: 10px;
  }
`;

export default function WeekWeatherInfo({ week }) {
  const dayNames = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const time = new Date(week.dt * 1000);
  const name = dayNames[time.getDay()];

  return (
    <Wrapper>
      <DailyList>
        <div>{name}</div>
        <div>아이콘</div>
        <DailyTemp>
          <div>{week.temp.max.toFixed()}</div>
          <div>{week.temp.min.toFixed()}</div>
        </DailyTemp>
      </DailyList>
    </Wrapper>
  );
}
