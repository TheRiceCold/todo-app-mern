import styled from "styled-components";
import { FC, Dispatch, SetStateAction } from "react";
import { useState } from "react";

interface IProps {
  noOfTasks: Number;
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
  setOpenNewModal: Dispatch<SetStateAction<boolean>>;
};

const Header: FC<IProps> = ({ 
  noOfTasks,
  activeFilter,
  setActiveFilter,
  setOpenNewModal, 
}) => {
  const date = new Date().toDateString();

  const filterButtons = [
    {
      label: "all",
      handleClick: () => setActiveFilter("all")
    },
    {
      label: "active",
      handleClick: () => setActiveFilter("active")
    },
    {
      label: "completed",
      handleClick: () => setActiveFilter("completed")
    },
  ];

  return (
    <header>
      <Title>{date}</Title>
      <Tools>
        <p>{noOfTasks} tasks</p>
        <div>
          {filterButtons.map(({ label, handleClick }) => (
            <FilterButton 
              key={label} 
              onClick={handleClick}
              active={activeFilter === label} 
            >
              {label}
            </FilterButton>
          ))}
        </div>
      </Tools>
      <NewButton>
        <button onClick={() => setOpenNewModal(true)}>
          New Task
        </button>
      </NewButton>
    </header>
  ); 
};

export default Header;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  padding: 20px 20px 6px 20px;
`;

const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 20px;
  p {
    color: #8a9ca5;
    font-size: 14px;
  }
`;

const FilterButton = styled.button<{ active?: boolean }>`
  background: 0;
  line-height: 1;
  color: #8a9ca5;
  font-size: 14px;
  cursor: pointer;
  padding: 3px 8px;
  border-radius: 20px;
  text-transform: capitalize;
  ${({ active }) => {
    const background = active ? "#7996a5" : "0";
    const color = active ? "#fff" : "#8a9ca5";

    return ` 
      background: ${background}; 
      color: ${color};
    `;
  }}
`;

const NewButton = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  button {
    color: #fff;
    width: 100px;
    height: 35px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    border-radius: 20px;
    transition: all 0.2s ease;
    background: cornflowerblue;
    &:hover {
      background: none;
      color: cornflowerblue;
      border: 2px solid cornflowerblue;
    }
  }
`

// const Form = styled.form`
//   display: flex;
//   margin-top: 10px;
//   input {
//     flex: 1;
//     color: #455963;
//     font-size: 16px;
//     padding: 10px 20px;
//     box-shadow: 0 -1px 0 #e2e4ea inset;
//     &::placeholder {
//       color: #a8b5bb;
//     }
//     &:focus {
//       box-shadow: 0 -1px 0 #bdcdd6 inset;
//     }
//   }
// `;
