import styled from "styled-components";
import { FC, ReactNode } from "react";

interface IProps {
  title: string;
  width: Number;
  height: Number;
  children: ReactNode | ReactNode[];
  handleClose: () => Dispatch<SetStateAction<boolean>>;
};

const Modal: FC<IProps> = ({ 
  title, 
  width, 
  height, 
  children,
  handleClose
}) => (
  <Overlay onClick={handleClose}>
    <main style={{
      padding: 25,
      display: "flex",
      borderRadius: 12,
      width: `${width}px`,
      height: `${height}px`,
      flexDirection: "column",
      backgroundColor: "#fff",
      boxShadow: "rgba(0, 0, 0, 0.2) 0 5px 15px",
    }}
      onClick={e => e.stopPropagation()}
    >
      <Title>{title}</Title>
      {children}
    </main>
  </Overlay>
);

export default Modal;

const Title = styled.h1`
  display: inline-block;
  text-align: center;
  font-size: 18px;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;
