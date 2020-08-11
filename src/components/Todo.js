import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AirPollutionItem from "./AirPollutionItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-top: 80px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
`;
export default function SelectedAirItem() {
  const selectedAir = useSelector(({ airs }) => airs.selectedAir);
  const history = useHistory();

  return (
    <Wrapper>
      {selectedAir ? (
        <AirPollutionItem
          air={selectedAir}
          onClickHandler={() => history.push("/air")}
        />
      ) : (
        <div>선택된 데이터가 없습니다.</div>
      )}
    </Wrapper>
  );
}
