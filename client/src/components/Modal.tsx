import styled from "styled-components";
import { FC, ReactNode } from "react";

interface IProps {
  title: string;
  width: Number,
  height: Number
  children: ReactNode | ReactNode[];
};

const Modal: FC<IProps> = ({ title, width, height, children }) => (
  <Overlay>
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  </Overlay>
);

export default Modal;

const Container = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  padding: 25px;
  border-radius: 12px;
  background-color: #fff;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0 5px 15px;
  h1 {
    display: inline-block;
    text-align: center;
    margin-top: 4px;
    font-size: 18px;
  }
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;
