import { FC } from "react";
import styled from "styled-components";

const Header: FC = () => {
  const date = new Date().toDateString();

  return (
    <header>
      <Title>{date}</Title>
    </header>
  ); 
};

export default Header;

const Title = styled.h1`
  margin: 0; 
  font-size: 20px;
  font-weight: 600;
  padding: 20px 20px 6px 20px;
`;
