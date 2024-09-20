import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({
    temp: "",
    desc: "",
    icon: "",
  });

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&APIkey=6152ed7c0699f414ef9c919dd06fce6b"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          temp: data.main.temp,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      });
  }, []);

  if (weather.icon) {
    return (
      <>
        <p>Temperature: {weather.temp} °C</p>
        <p>Description: {weather.desc}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="Weather icon"
        />
      </>
    );
  }

  return <>
    <p>Loading...</p>
  </>;
}

export default App;
