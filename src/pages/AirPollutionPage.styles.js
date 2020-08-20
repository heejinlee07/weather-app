import styled from "styled-components";

export const AirPollutionListBlock = styled.div`
  position: relative;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1100px;
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
