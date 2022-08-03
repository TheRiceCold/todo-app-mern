import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FC } from "react";
import Modal from "./Modal";

interface IProps {
  title: string;
  content: string;
  handleClick: () => void;
};

const DeleteAlertDialog: FC<IProps> = ({ title, content, handleClick }) => (
  <Modal title={title}>
    <Body>{content}</Body>
    <Footer>
      <button>no</button>
      <button>yes</button>
    </Footer>
  </Modal>
);

export default DeleteAlertDialog;

const Body = styled.div`
  
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 75px;
    color: #fff;
    height: 35px;
    margin: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    text-transform: capitalize;
    &:first-child {
      background-color: cornflowerblue;
    }
    &:last-child {
      background-color: crimson;
    }
  }
`;
