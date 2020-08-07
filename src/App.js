import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import CurrentWeatherInfo from "./components/CurrentWeatherInfo";
import AirPollutionSet from "./components/AirPollutionSet";

import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./components/common/button";

const Main = styled.div`
  background-image: url("./components/assets/main.jpg");
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100%;
`;

const ButtonArea = styled.div`
  display: flex;
  padding: 15px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
`;

function App() {
  return (
    <Main>
      <BrowserRouter>
        <>
          <ButtonArea>
            <Link to="/">
              <Button btnHeight={30} btnWidth={50}>
                오늘의 날씨
              </Button>
            </Link>
            <Link to="air">
              <Button btnHeight={30} btnWidth={50}>
                서울시 미세먼지 정보
              </Button>
            </Link>
          </ButtonArea>
          <GlobalStyle />
          <Title>오늘의 날씨</Title>
        </>
        <Switch>
          <Route exact path="/" component={CurrentWeatherInfo} />
          <Route path="/air" component={AirPollutionSet} />
        </Switch>
      </BrowserRouter>
    </Main>
  );
}

export default App;
