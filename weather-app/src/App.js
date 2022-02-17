import { useState } from "react";
import styled from "styled-components";

import axios from "axios";

import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background-color: white;
font-family: Montserrat;


`;

const AppLabel=styled.span`
color: aquamarine;
font-size: 18px;
font-weight: bold;
`

const API_KEY="5efe22ea66934c8ca72d215d959ae539";

function App() {
  const [city,updateCity]=useState();
const [weather,updateWeather]=useState();

const fetchWeather=async (e)=>{
  e.preventDefault();
  const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  updateWeather(response.data)
  console.log(response)
};
  return (
    <Container>
      <AppLabel> React Weather App</AppLabel>
      {weather ? (
        <WeatherComponent  weather={weather}/> ) :(
       <CityComponent  updateCity={updateCity} fetchWeather={fetchWeather}/>
        )
      }
    
    </Container>
  );
}

export default App;
