import styled from "styled-components";

const WeatherinfoIcons={
  sunset:"./icons/temp.svg",
  sunrise:"./icons/temp.svg",
  humidity:"./icons/humidity.svg",
  wind:"./icons/wind.svg",
  pressure:"./icons/pressure.svg",
}
 const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};


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
const InfoIcon =styled.img`
 width: 36px;
 height: 36px;
 /* border: 1px solid red; */
`
const InfoLabel=styled.div`
 display: flex;
 flex-direction: column;
 font-size: 14px;
 margin: 15px;
& span {
    font-size: 12px;
    text-transform: capitalize;
}
`

const WeatherInfoComponent=(props)=>{
    
 
   const {name,value} = props;
    return(
        <InfoContainer>
            <InfoIcon src={WeatherinfoIcons[name]}/>
            <InfoLabel>{value}<span>{name}</span></InfoLabel>
        </InfoContainer>
    )
}

const WeatherComponent = ( props) => {
  const {weather}=props;
// forsunrise and sunset
 const isDay=weather.weather[0].icon.includes("d");

//  for time
const getTime=(timeStamp)=>{
  return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()} `
}
  
  return (
    <>
      <WeatherCondition>
        <Condition>
        <span>{`${Math.floor(weather.main.temp - 273)}°C`}</span>{`| ${weather.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather.weather[0].icon]} alt="/icons/cloudy.svg"></WeatherLogo>
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>weather info</WeatherInfoLabel>
      <WeatherinfoContainer>
        <WeatherInfoComponent name={isDay ? "sunrise" : "sunset"} value={getTime(isDay ? weather.sys.sunrise : weather.sys.sunset )}/>
        <WeatherInfoComponent name="humidity" value={weather.main.humidity}/>
        <WeatherInfoComponent name="wind" value={weather.wind.speed}/>
        <WeatherInfoComponent name="pressure" value={weather.main.pressure}/>
      </WeatherinfoContainer>
    </>
  );
};

export default WeatherComponent;
