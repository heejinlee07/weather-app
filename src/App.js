import React from "react";
import CurrentWeatherInfo from "./components/CurrentWeatherInfo";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <div className="App">
        <CurrentWeatherInfo />
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
