import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.section`
  padding: 4em;
  background: lightblue;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  min-height: 50%;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: #0070f3;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 4px solid palevioletred;
  border-radius: 3px;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  display: inline-block;
`;

export const LinkButton = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Strawford;
  text-decoration: none;
  margin: 10px;
`;

export const Anchor = styled.a`
  text-decoration: underline;
  font-size: 2rem;
`;

export const Input = styled.input`
  margin: 0.5em;
  padding: 0.5em;
  background: white;
  border: none;
  border-radius: 5px;
  color:${props=>props.inputcolor || "Brown"}
`;
