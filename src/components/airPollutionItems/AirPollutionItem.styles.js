import styled from "styled-components";

export const Wrapper = styled.div``;

export const AirTotalInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 220px;
  margin: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;

export const Card = styled.div`
  position: relative;
  perspective: 150rem;
`;

export const AirAreaBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  padding: 40px;
  width: 380px;
  height: 200px;
  border-radius: 10px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  transform: rotateY(0deg);
  backface-visibility: hidden;

  &:hover {
    transform: rotateY(-180deg);
    transition: 1s;
  }
`;

export const AirAreaText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

export const AirPollutionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 220px;
`;

export const AirDetail = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;

export const AirPollution = styled.div`
  margin-right: 15px;
  height: 200px;

  & > * {
    font-size: 20px;
  }
`;

export const AirPollutionDust = styled.div`
  font-size: 20px;
`;

export const AirTotalText = styled.div`
  font-size: 14px;
  color: gray;
  margin-top: 10px;
`;
