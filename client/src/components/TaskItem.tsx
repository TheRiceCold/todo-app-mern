import styled from "styled-components";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { FC, Dispatch, SetStateAction } from "react";

interface IProps {
  id: Number;
  title: string;
  isCompleted: boolean;
  setOpenEditModal: Dispatch<SetStateAction<boolean>>;
  setOpenDeleteAlert: Dispatch<SetStateAction<boolean>>;
};

const TaskItem: FC<IProps> = ({ 
  id, 
  title, 
  isCompleted,
  setOpenEditModal,
  setOpenDeleteAlert,
}) => {

  const toggleCompleted = () => {
    
  };

  return (
    <Item>
      <input type="checkbox" onChange={toggleCompleted} checked={isCompleted} />
      <label>{title}</label>
      <button>
        <FiEdit2 
          size={16} 
          color={"#445963"} 
          onClick={() => setOpenEditModal(true)}
        />
      </button>
      <button>
        <FiTrash2 
          size={16} 
          color="red" 
          onClick={() => setOpenDeleteAlert(true)}
        />
      </button>
    </Item>
  );
};

export default TaskItem;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 12px 20px;
  align-items: center;
  border-top: 1px solid #eef0f5;

  &:hover {
    background-color: #f6fbff;
    button { display: block; }
  }

  input[type="checkbox"] {
    appearance: none;
    width: 18px; height: 18px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    background-color: #fff;
    border: 2px solid #bbbdc7;
    &:hover {
      border-color: #38bb90;
    }
    &:checked {
      background-image: url("./checkmark.svg");
      background-size: 130%;
      border-color: #38bb90;
      background-position: center;
      + label {
        text-decoration: line-through rgba(0, 0, 0, 0.3);
      }
    }
  }

  label {
    margin-right: auto;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    border: 0;
    width: 18px;
    padding: 0;
    height: 18px;
    display: none;
    cursor: pointer;
    overflow: hidden;
    background: none;
    margin-left: 4px;
  }
`;
