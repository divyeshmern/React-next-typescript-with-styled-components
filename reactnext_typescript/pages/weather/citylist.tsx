import { GetStaticProps } from "next";
import { Country } from "../../interfaces";
import { cityDataList } from "../../utils/countries";
import Link from "next/link";
import Head from "next/head";
import Card from "../../Components/Card/Card";
import styled, { keyframes, css } from "styled-components";

interface IProps {
  isProcessing?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

const styledButton = styled.button<IProps>`
  width: 10rem;
  height: 4rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  ${({ isProcessing }) =>
    isProcessing &&
    css`
      opacity: 0.5;
      cursor: progress;
    `}
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  font-size: 1em;
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const rotate = keyframes`
    from{
      transform:rotate(0deg);
    }

    to{
      transform: rotate(360deg);
    }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

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
      <Input placeholder="A small text input" />
      <br />
      <Input placeholder="A bigger text input" size="2em" />
      <br />
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
      <br />

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
