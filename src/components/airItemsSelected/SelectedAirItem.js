import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AirPollutionItem from "../airPollutionItems/AirPollutionItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-top: 80px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  width: 440px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  padding-top: 15px;
`;

export default function SelectedAirItem() {
  const selectedAir = useSelector(({ airs }) => airs.selectedAir);
  const history = useHistory();
  console.log("history", history);

  return (
    <Wrapper>
      <Title>서울시 미세먼지 정보</Title>
      {selectedAir ? (
        <AirPollutionItem
          air={selectedAir}
          onClickHandler={() => history.push("/air")}
        />
      ) : (
        <Title>선택된 데이터가 없습니다.</Title>
      )}
    </Wrapper>
  );
}
