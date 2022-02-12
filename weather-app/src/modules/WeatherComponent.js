import styled from "styled-components";

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;
const Condition = styled.span`
  font-size: 14px;
  margin: 28px auto;
  & span {
    font-size: 28px;
  }
`;
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 100%;
`;

const WeatherinfoContainer=styled.div`
display: flex;;
width: 90%;
flex-direction:row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`
const InfoContainer=styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  align-items: center;
  margin:5px 10px;
`
const InfoIcon=styled.div`
 width: 36px;
 height: 36px;
 border: 1px solid red;
`
const InfoLabel=styled.div`
 display: flex;
 flex-direction: row;
 font-size: 14px;
 margin: 15px;
& span {
    font-size: 12px;
    text-transform: capitalize;
}
`

const WeatherInfoComponent=()=>{
    return(
        <InfoContainer>
            <InfoIcon src="/icons/perfect-day.svg"/>
            <InfoLabel>ddddd<span>39</span></InfoLabel>
        </InfoContainer>
    )
}

const WeatherComponent = () => {
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>30 C</span>| Cloudy
        </Condition>
        <WeatherLogo src="/icons/perfect-day.svg"></WeatherLogo>
      </WeatherCondition>
      <Location>London ,GB</Location>
      <WeatherInfoLabel>weather info</WeatherInfoLabel>
      <WeatherinfoContainer>
        <WeatherInfoComponent />
        <WeatherInfoComponent />
        <WeatherInfoComponent />
        <WeatherInfoComponent />
      </WeatherinfoContainer>
    </>
  );
};

export default WeatherComponent;
