import React from "react";
import { Post } from "../../interfaces";
import Link from "next/link";
import styled from "styled-components";

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  height: 50%;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const CardBody = styled.div`
  padding: 2px 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-size: 1em;
  color: #0070f3;
  text-decoration: none;
`;

const LinkButton = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Strawford;
  text-decoration: none;
  margin: 10px;
`;

const Anchor = styled.a`
  text-decoration: underline;
  font-size: 1rem;
`;

const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px
  grid-gap: 5px
`;

type Props = {
  items: Post[];
};

const Card = ({ items }: Props) => {
  return (
    <div>
      {items.map((d) => {
        return (
          <CardContainer key={d.id}>
            <Image
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <CardBody>
              <Title> ID: {d.id}</Title>
              <Link href="/post/[id]" as={`/post/${d.id}`}>
                <Anchor>{d.name}</Anchor>
              </Link>
              {/* <Link href="/post/[id]" as={`/post/${d.id}`}>
                <a style={{ textDecoration: "underline" }}>{d.name}</a>
              </Link> */}
              <Title>Description: {d.description}</Title>
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
};

export default Card;
