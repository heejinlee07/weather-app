import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/airPollutionApi";
import AirPollutionItem from "./AirPollutionItem";

import Button from "../common/button";

import {
  AIR_SET_LOADING,
  AIR_SET_DATA,
  AIR_HAS_ERROR,
} from "../../modules/AirReducer";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

const AirPollutionListBlock = styled.div`
  position: relative;
`;

const ButtonArea = styled.div`
  position: absolute;
  top: 20px;
  right: 81px;
  width: 70px;
`;

const AirTimeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AirTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-top: 20px;

  & > div {
    font-size: 15px;
    margin-top: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function AirPollutionList() {
  const airs = useSelector(({ airs }) => airs.airs);
  const status = useSelector(({ airs }) => airs.status);
  const history = useHistory();

  const goHome = () => {
    history.goBack();
  };

  console.log(history);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAirList = async () => {
      dispatch({ type: AIR_SET_LOADING });
      try {
        const { data } = await api.get("/");
        // setAirs(data.RealtimeCityAir.row);
        dispatch({ type: AIR_SET_DATA, payload: data.RealtimeCityAir.row });
        console.log("data", data);
        console.log("[data array RealtimeCityAir]", data.RealtimeCityAir);
        console.log("[data array row]", data.RealtimeCityAir.row);
      } catch (e) {
        dispatch({ type: AIR_HAS_ERROR });
      }
    };
    getAirList();
  }, [dispatch]);

  if (status === "idle" || (status === "loading" && airs.length === 0))
    return <div>Now Loading...</div>;

  const time = airs[0]?.MSRDT;
  const year = time.slice(0, 4);
  const month = time.slice(4, 6);
  const day = time.slice(6, 8);
  const minutes = time.slice(8, 10) + "시 " + time.slice(10, 12) + "분";

  return (
    <AirPollutionListBlock>
      <ButtonArea>
        <Button btnHeight={30} btnWidth={100} onClick={goHome}>
          뒤로가기
        </Button>
      </ButtonArea>
      <AirTimeInfo>
        <AirTitle>
          서울시 대기환경 현황
          <div>측정시간: {`${year}년 ${month}월 ${day}일 ${minutes}`}</div>
        </AirTitle>
      </AirTimeInfo>
      <Wrapper>
        {status === "error" && <h1>Error Occured...</h1>}
        {airs.map((air) => (
          <AirPollutionItem key={air.MSRSTE_NM} air={air} />
        ))}
      </Wrapper>
    </AirPollutionListBlock>
  );
}
