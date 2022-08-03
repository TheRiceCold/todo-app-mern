import { FC } from "react";

const DeleteAlertDialog: FC = ({ title, content, handleClick }) => (
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

const Container = style.div`

`;

const Body = style.div`

`;

const Footer = style.div`

`;
