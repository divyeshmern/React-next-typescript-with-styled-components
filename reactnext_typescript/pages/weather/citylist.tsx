import { GetStaticProps } from "next";
import { Country } from "../../interfaces";
import { cityDataList } from "../../utils/countries";
import Link from "next/link";
import Head from "next/head";
import Card from "../../Components/Card/Card";

type Props = {
  items: Country[];
};

export default function citylist({ items }: Props) {
  return (
    <>
      <Head>
        <title>City List</title>
      </Head>
      <h1>City List</h1>
      <br />
      <ul>
        {items.map((d) => {
          return (
            <li key={d.id}>
              <Link href="/weather/[id]" as={`/weather/${d.id}`}>
                <a style={{ textDecoration: "underline" }}>{d.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <p>
        <Link href="/">
          <a style={{ textDecoration: "underline" }}>Go to Home page</a>
        </Link>
      </p>
    </>
  );
}

export const getStaticProps = async () => {
  const items: Country[] = cityDataList;
  return {
    props: { items },
  };
};
