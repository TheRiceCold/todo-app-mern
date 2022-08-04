import styled from "styled-components";

import { useTasks } from "./contexts/TasksProvider";
import { FC, useState, FormEvent } from "react";
import { useQuery } from "react-query";
import {
  AlertDialog,
  EditModal,
  NewModal,
  TaskList,
  Header,
} from "./components";

const App: FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [openNewModal, setOpenNewModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState<boolean>(false);

  const { getTasks } = useTasks();
  const { isLoading, data: tasks } = useQuery(["tasks", activeFilter], getTasks);

  const handleEdit = (event: FormEvent) => {
    event.preventDefault();
    console.log("edit");
  };

  const handleDelete = () => { 
    console.log("delete");
  };

  const handleCreate = (event: FormEvent) => {
    event.preventDefault();
    console.log("create");
  };

  return (
    <Container>
      <Header 
        noOfTasks={tasks?.length}
        activeFilter={activeFilter}
        setOpenNewModal={setOpenNewModal} 
        setActiveFilter={setActiveFilter}
      />
      <TaskList 
        tasks={tasks}
        loadingTasks={isLoading}
        setOpenEditModal={setOpenEditModal}
        setOpenDeleteAlert={setOpenDeleteAlert}
      />
      {openNewModal && 
        <NewModal
          title="New Task"
          submitLabel="Create"
          handleSubmit={handleCreate}
          handleClose={() => setOpenNewModal(false)}
        /> 
      }
      {openEditModal && 
        <EditModal 
          title="Edit Task"
          submitLabel="Update"
          handleSubmit={handleEdit}
          handleClose={() => setOpenEditModal(false)}
        /> 
      }
      {openDeleteAlert &&
        <AlertDialog 
          handleClick={handleDelete}
          handleClose={() => setOpenDeleteAlert(false)}
          title="Are you sure you want to delete this task?"
        />
      }
    </Container>
  );
}

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
