import styled from "styled-components";

export const AirPollutionListBlock = styled.div`
  position: relative;
`;

export const ButtonArea = styled.div`
  position: absolute;
  top: 20px;
  right: 81px;
  width: 70px;
`;

export const AirTimeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AirTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-top: 20px;

  & > div {
    font-size: 15px;
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
