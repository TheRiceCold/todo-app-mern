import { FC } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App: FC = () => (
  <Container>
    <Header />
    <TaskList />
  </Container>
);

export default App;

const Container = styled.main`
  max-width: 600px;
  width: 100%;
  margin: auto;
  background-color: #fff;
  border-radius: 16px;
  font-size: 15px;
  overflow: hidden;
  color: #445963;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
  font-family: "DM sans", sans-serif;
`;
