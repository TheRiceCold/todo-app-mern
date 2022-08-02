import styled from "styled-components";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { FC } from "react";

const TaskList: FC = () => {

  const handleDelete = () => {
    alert("Delete");
  };

  const handleEdit = () => {
    alert("Edit");
  };

  return (
    <Container>
      <Item>
        <input type="checkbox" />
        <label>Todo 1</label>
        <button>
          <FiEdit2 
            size={16} 
            color={"#445963"} 
            onClick={handleEdit}
          />
        </button>
        <button>
          <FiTrash2 
            size={16} 
            color="red" 
            onClick={handleDelete}
          />
        </button>
      </Item>
      <Item>
        <input type="checkbox" />
        <label>Todo 2</label>
        <button>
          <FiEdit2 
            size={16} 
            color={"#445963"} 
            onClick={handleEdit}
          />
        </button>
        <button>
          <FiTrash2 
            size={16} 
            color="red" 
            onClick={handleDelete}
          />
        </button>
      </Item>
      <Item>
        <input type="checkbox" />
        <label>Todo 3</label>
        <button>
          <FiEdit2 
            size={16} 
            color={"#445963"} 
            onClick={handleEdit}
          />
        </button>
        <button>
          <FiTrash2 
            size={16} 
            color="red" 
            onClick={handleDelete}
          />
        </button>
      </Item>
    </Container>
  );
};

export default TaskList;

const Container = styled.div`
  overflow: auto;
  max-height: 60vh;
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    overflow: hidden;
    background: none;
    cursor: pointer;
    margin-left: 4px;
  }
`;
