import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../services/airPollutionApi";

import {
  AirPollutionListBlock,
  ButtonArea,
  AirTimeInfo,
  AirTitle,
  Wrapper,
} from "./AirPollutionPage.styles";

import AirPollutionItem from "../components/airPollutionItems/AirPollutionItem";
import Buttons from "../components/common/button/Buttons";
import {
  AIR_SET_LOADING,
  AIR_SET_DATA,
  AIR_HAS_ERROR,
} from "../modules/AirReducer";
import Inputs from "../components/common/input/Inputs";

export default function AirPollutionPage() {
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
        dispatch({ type: AIR_SET_DATA, payload: data.RealtimeCityAir.row });
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

  const searchRegion = (e) => {
    console.log(e.target.value);
    // const searchKeyword = e.target.value;
    // const searchCompleted = airs.find((el) => searchKeyword === el.MSRSTE_NM);
    // console.log(searchCompleted);
  };

  // task. 검색 키워드에 해당하는 카드로 이동하게
  const EnterKeyword = (e) => {
    if (e.key === "Enter") {
      const searchKeyword = e.target.value;
      const searchCompleted = airs.find((el) => searchKeyword === el.MSRSTE_NM);
      console.log(searchCompleted);
    }
  };
  return (
    <AirPollutionListBlock>
      <ButtonArea>
        <Inputs
          placeholder="지역을 입력하세요"
          InputWidth={200}
          InputPadding={8}
          InputBorderRad={10}
          onChange={searchRegion}
          onKeyPress={EnterKeyword}
        />
        <Buttons btnHeight={30} btnWidth={100} BtnPadding={10} onClick={goHome}>
          뒤로가기
        </Buttons>
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
