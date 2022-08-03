import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FC, Dispatch, SetStateAction } from "react";
import Modal from "./Modal";

interface IProps {
  title: string;
  handleClick: () => void;
  handleClose: () => Dispatch<SetStateAction<boolean>>;
};

const DeleteAlertDialog: FC<IProps> = ({ 
  title, 
  handleClick,
  handleClose,
}) => (
  <Modal 
    title={title} 
    width={300} 
    height={175}
    handleClose={handleClose}
  >
    <ActionButtons>
      <button onClick={handleClose}>no</button>
      <button onClick={handleClick}>yes</button>
    </ActionButtons>
  </Modal>
);

export default DeleteAlertDialog;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 75px;
    color: #fff;
    height: 35px;
    margin: 15px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 30px;
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
