import styled from "styled-components";

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

function App() {
  return (
    <Container>
      <AppLabel> React Weater App</AppLabel>
      {/* <CityComponent /> */}
      <WeatherComponent />
    </Container>
  );
}

export default App;