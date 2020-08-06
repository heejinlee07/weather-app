import React, { useEffect, useState } from "react";
import { api } from "../utils/airPollutionApi";
import AirPollutionList from "./AirPollutionList";

import styled from "styled-components";

const Wrapper = styled.div``;

export default function AirPollutionSet() {
  const [airs, setAirs] = useState();
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const getAirList = async () => {
      setLoading(true);
      try {
        const { data } = await api.get("/");
        setAirs(data.RealtimeCityAir.row);
        console.log("[data array]", data.RealtimeCityAir.row);
        console.log("[data array2]", data.RealtimeCityAir);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    getAirList();
  }, []);

  if (isLoading && !airs) return <div>로딩중</div>;

  const time = airs[0]?.MSRDT;

  const year = time.slice(0, 4);
  const month = time.slice(4, 6);
  const day = time.slice(6, 8);
  const minutes = time.slice(8, 10) + "시 " + time.slice(10, 12) + "분";

  return (
    <Wrapper>
      <h2>측정시간</h2>
      <div>{`${year}년 ${month}월 ${day}일 ${minutes}`}</div>
      {hasError && <h1>Error Occured...</h1>}
      <div>
        {airs.map((air) => (
          <AirPollutionList key={air.MSRSTE_NM} air={air} />
        ))}
      </div>
    </Wrapper>
  );
}
