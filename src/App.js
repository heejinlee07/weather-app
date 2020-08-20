import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import WeatherPage from "./pages/WeatherPage";
import AirPollutionPage from "./pages/AirPollutionPage";

import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Buttons from "./components/common/button/Buttons";
import bgImage from "./assets/main.jpg";

const ToggleButton = styled.div``;

const Main = styled.div`
  /* background-image: url(${bgImage}); */
  background-size: auto;
  background-position: center;
  width: 100%;
  height: 100%;
  /* color: white; */
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
              <Buttons btnHeight={30} btnWidth={100} BtnPadding={7}>
                오늘의 날씨
              </Buttons>
            </Link>
            <Link to="air">
              <Buttons btnHeight={30} btnWidth={150} BtnPadding={7}>
                서울시 미세먼지 정보
              </Buttons>
            </Link>
            <ToggleButton>
              <Buttons btnHeight={30} btnWidth={100} BtnPadding={7}>
                toggle
              </Buttons>
            </ToggleButton>
          </ButtonArea>
          <GlobalStyle />
          <Title>오늘의 날씨</Title>
        </>
        <Switch>
          <Route exact path="/" component={WeatherPage} />
          <Route path="/air" component={AirPollutionPage} />
        </Switch>
      </BrowserRouter>
    </Main>
  );
}

export default App;
