import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Button } from "react-bootstrap";
import WeatherView from "../../Components/Weather/WeatherView"
import SpinnerPage from "../../Components/Spinners";

const Citysearch:React.FC = () => {
  const [cityName, setCityName] = useState<string>("");
  const [weather, setWeather] = useState<{[key: string]: any }>({});
  const [loading, setLoading] = useState<boolean>(false);
  
  const api_key = "d987b512cd513f5d8f09ad2a29104ce7";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${api_key}`;

  const fetchWeather = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCityName("");
    setLoading(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  if (loading) {
    return <SpinnerPage />;
  } else {
    return (
      <>
        <div>
          <p style={{ fontFamily: "Strawford", fontSize: "2rem" }}>
            Weather Report with search of city
          </p>
          <br />
          <form onSubmit={fetchWeather}>
            <div className="input-group" style={{ width: "50%" }}>
              <input
                id="city"
                type="textbox"
                placeholder="Search with City"
                className="form-control"
                onChange={handleChange}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-success"
                  type="button"
                  id="addressSearch"
                  onClick={fetchWeather}
                >
                  Search
                </button>
              </span>
            </div>
          </form>
        </div>
        <div style={{marginTop:"15px"}}>{weather.main && <WeatherView data={weather} />}</div>
      </>
    );
  }
};

export default Citysearch;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
