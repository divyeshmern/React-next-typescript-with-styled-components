import { GetServerSideProps } from "next";
import React from "react";
import { useRouter } from "next/router";
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
  return (
    <div>
      <h3>City ID-wise Weather-Report</h3>
      <br/>
      <div>{<WeatherView data={data} />}</div>
    </div>
  );
}

export default CityIdReport;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("context",context);
  const city_id = context.query.id;
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&units=imperial&appid=${process.env.WEATHER_API_KEY}`;
  const result = await fetch(url);
  const weatherData = await result.json();
  return {
    props: { data: weatherData },
  };
};
