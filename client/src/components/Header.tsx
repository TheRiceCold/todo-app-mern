import styled from "styled-components";
import { useState } from "react";
import { FC } from "react";

const Header: FC = () => {
  const date = new Date().toDateString();
  const [activeFilter, setActiveFilter] = useState<String>("all");

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
        <p>5 tasks</p>
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
      <Form>
        <input placeholder="Add a new task..." />
      </Form>
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

const FilterButton = styled.button`
  border: 0;
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

const Form = styled.form`
  display: flex;
  margin-top: 10px;
  input {
    flex: 1;
    border: 0;
    color: #455963;
    font-size: 16px;
    padding: 10px 20px;
    box-shadow: 0 -1px 0 #e2e4ea inset;
    &::placeholder {
      color: #a8b5bb;
    }
    &:focus {
      box-shadow: 0 -1px 0 #bdcdd6 inset;
    }
  }
`;
