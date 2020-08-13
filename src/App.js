import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import TotalInfo from "./components/weatherInfos/TotalInfo";
import AirPollutionList from "./components/airPollutions/AirPollutionList";

import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./components/common/button";
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
              <Button btnHeight={30} btnWidth={100}>
                오늘의 날씨
              </Button>
            </Link>
            <Link to="air">
              <Button btnHeight={30} btnWidth={150}>
                서울시 미세먼지 정보
              </Button>
            </Link>
            <ToggleButton>
              <Button btnHeight={30} btnWidth={100}>
                toggle
              </Button>
            </ToggleButton>
          </ButtonArea>
          <GlobalStyle />
          <Title>오늘의 날씨</Title>
        </>
        <Switch>
          <Route exact path="/" component={TotalInfo} />
          <Route path="/air" component={AirPollutionList} />
        </Switch>
      </BrowserRouter>
    </Main>
  );
}

export default App;
