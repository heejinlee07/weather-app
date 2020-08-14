import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/button";
import { dayNames } from "../../constants/DateTime";
import SelectedWeatherItem from "../airPollutions/SelectedAirItem";

const WrapperBlock = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 350px;
`;

const TimeInfo = styled.div`
  font-size: 45px;
  font-weight: bold;
`;

const DateInfo = styled.div`
  font-size: 30px;
`;

const Greeting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 18px;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const today = new Date();

const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? "PM" : "AM";

hour %= 12;
hour = hour || 12;

minute = minute < 10 ? "0" + minute : minute;
second = second < 10 ? "0" + second : second;

console.log(today);

export default function TodayDate() {
  const [value, setValue] = useState(localStorage.getItem("username"));
  const [isLoggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("username")
  );

  const saveUser = (value) => {
    localStorage.setItem("username", value);
  };

  const onCreate = () => {
    if (!value) return;
    saveUser(value);
    setLoggedIn(true);
    setValue("");
    // e.preventDefault();
  };

  console.log(value);

  const onChange = (e) => {
    setValue(e.target.value);
    // if (e.target.value === "") return;
  };

  console.log(value);

  const onEnter = (e) => {
    if (e.key === "Enter") onCreate();
  };

  const onRemove = () => {
    localStorage.removeItem("username", value);
    setLoggedIn(false);
  };

  return (
    <WrapperBlock>
      <Wrapper>
        <TimeBlock>
          <TimeInfo>
            {hour} : {minute} {ampm}
          </TimeInfo>
          <DateInfo>
            {month}월 {date}일
          </DateInfo>
          <Greeting>
            <div style={{ marginRight: "10px" }}>안녕하세요</div>
            {!isLoggedIn && (
              <>
                <Input
                  value={value}
                  onChange={onChange}
                  onKeyPress={onEnter}
                  placeholder="이름을 입력하세요"
                />
                <Button btnwidth={30} btnHeight={7} onClick={onCreate}>
                  Add
                </Button>
              </>
            )}
            {isLoggedIn && (
              <>
                <div style={{ marginRight: "7px" }}>
                  {localStorage.getItem("username")}님
                </div>
                <Button btnwidth={30} btnHeight={7} onClick={onRemove}>
                  Edit
                </Button>
              </>
            )}
          </Greeting>
        </TimeBlock>
      </Wrapper>
      <SelectedWeatherItem />
    </WrapperBlock>
  );
}
