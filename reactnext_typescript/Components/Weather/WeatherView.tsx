import React from "react";
import { Image } from "react-bootstrap";
import styles from "./weather.module.css";
import moment from "moment";

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
      <div className={styles.main}>
        <p className={styles.header}>{data.name}</p>
        <div className={styles.flex}>
          <p className={styles.day}>
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </p>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
          <p className={styles.description}>
            {data.weather[0].main}-{data.weather[0].description}
          </p>
        </div>

        <div className={styles.flex}>
          <p className={styles.temp}>Longitude: {data.coord.lon}</p>
          <p className={styles.temp}>Latitude: {data.coord.lat} </p>
        </div>

        <div className={styles.flex}>
          <p className={styles.temp}>Temprature: {data.main.temp} &deg;C</p>
          <p className={styles.temp}>Humidity: {data.main.humidity} %</p>
        </div>

        <div className={styles.flex}>
          <p className={styles.temp}>Wind deg:{data.wind.deg}</p>
          <p className={styles.temp}>
            Wind Speed: {data.wind.speed.toFixed(0)}
          </p>
        </div>

        <div className={styles.flex}>
          <p className={styles.sunrisesunset}>
            Sunrise:{" "}
            {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
          </p>
          <p className={styles.sunrisesunset}>
            Sunset:{" "}
            {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherView;
