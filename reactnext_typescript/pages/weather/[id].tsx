import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import WeatherView from "../../Components/Weather/WeatherView";

interface weather {
  id: number;
  main: string;
  description: string;
  name: string;
}

interface weatherListProps {
  data: weather[];
}

function CityIdReport({ data }: weatherListProps) {
  const router = useRouter();
  const { id } = router.query;
  console.log("server-side-data", data);
  return (
    <div>
      City ID-wise Weather-Report
      <div>{<WeatherView data={data} />}</div>
    </div>
  );
}

export default CityIdReport;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const city_id = context.query.id;
  const api_key = "d987b512cd513f5d8f09ad2a29104ce7";
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&units=imperial&appid=${api_key}`;
  const result = await fetch(url);
  const weatherData = await result.json();
  return {
    props: { data: weatherData },
  };
};
