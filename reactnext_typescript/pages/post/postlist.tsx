import { GetStaticProps } from "next";
import { Post } from "../../interfaces";
import { postDataList } from "../../utils/post-data";
import Link from "next/link";
import Head from "next/head";
import Card from "../../Components/Card/Card";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: #0070f3;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

type Props = {
  items: Post[];
};

export default function postlist({ items }: Props) {
  return (
    <>
      <Title>Post List</Title>
      <br />
      <Card items={items} />
      <p>
        <Link href="/">
          <a style={{ textDecoration: "underline" }}>Go to Home page</a>
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
