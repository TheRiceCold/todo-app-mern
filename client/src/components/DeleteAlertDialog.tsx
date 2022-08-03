import styled from "styled-components";
import { FC } from "react";

interface IProps {
  title: string;
  content: string;
  handleClick: () => void;
};

const DeleteAlertDialog: FC<IProps> = ({ title, content, handleClick }) => (
  <Overlay>
    <Container>
      <button>x</button>
      <h1>{title}</h1>
      <Body>{content}</Body>
      <Footer>
        <button>no</button>
        <button>yes</button>
      </Footer>
    </Container>
  </Overlay>  
);

export default DeleteAlertDialog;

const Overlay = styled.div`

`;

const Container = styled.div`

`;

const Body = styled.div`

`;

const Footer = styled.div`

`;
