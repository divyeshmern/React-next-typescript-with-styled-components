import styled from "styled-components";

export const CardContainer = styled.div`
  width: 50%;
  border-radius: 20px;
  background-color: #01579b;
`;

export const CardTitle = styled.p`
  background-color: #424242;
  color: whitesmoke;
  //   margin: 10px 0px 0px 10px;
  margin: 0 auto;
  font-size: 25px;
  border-radius: 20px 20px 0 0;
  font-family: "Recursive", sans-serif;
  text-align: center;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardLeft = styled.p`
  padding: 15px;
  color: whitesmoke;
  font-family: "Recursive", sans-serif;
  font-size: 20px;
  font-weight: 600;
`;

export const CardRight = styled.p`
  padding: 15px;
  color: whitesmoke;
  font-family: "Strawford";
  font-size: 20px;
  font-weight: 600;
`;
