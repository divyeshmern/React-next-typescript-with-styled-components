import { GetStaticProps } from "next";
import { Post } from "../../interfaces";
import { postDataList } from "../../utils/post-data";
import Link from "next/link";
import Head from "next/head";
import Card from "../../Components/Card/Card";
import { Col, Row } from "react-bootstrap";

type Props = {
  items: Post[];
};

export default function postlist({ items }: Props) {
  return (
    <>
      <Head>
        <title>Post List</title>
      </Head>
      <h1>Post List</h1>
      <br/>
      <Card items={items}/>
      <p>
        <Link href="/">
          <a style={{textDecoration:"underline"}}>Go to Home page</a>
        </Link>
      </p>
    </>
  );
}

export const getStaticProps = async () => {
  const items: Post[] = postDataList;
  return {
    props: { items },
  };
};
