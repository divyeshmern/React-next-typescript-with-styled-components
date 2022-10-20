import React from "react";
import { Image } from "react-bootstrap";
import styles from "./weather.module.css";
import moment from "moment";
import {
  CardContainer,
  CardTitle,
  CardRow,
  CardLeft,
  CardRight,
} from "../../styles/WeatherView.style";

interface weather {
  id: number;
  main: string;
  description: string;
  name: string;
}

interface weatherListProps {
  data: weather[];
}

const WeatherView = ({ data }: weatherListProps) => {
  return (
    <>
      <CardContainer>
        <CardTitle>{data.name}</CardTitle>
        <CardRow>
          <CardLeft>
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </CardLeft>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon"
          />
          <CardRight>
            {data.weather[0].main}-{data.weather[0].description}
          </CardRight>
        </CardRow>
        <CardRow>
          <CardLeft>Longitude : {data.coord.lon}</CardLeft>
          <CardRight>Latitude : {data.coord.lat}</CardRight>
        </CardRow>
        <CardRow>
          <CardLeft>Temprature : {data.main.temp} &deg;C</CardLeft>
          <CardRight>Humidity : {data.main.humidity} %</CardRight>
        </CardRow>
        <CardRow>
          <CardLeft>
            Sunrise:{" "}
            {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
          </CardLeft>
          <CardRight>
            Sunset:{" "}
            {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
          </CardRight>
        </CardRow>
      </CardContainer>
    </>
  );
};

export default WeatherView;
