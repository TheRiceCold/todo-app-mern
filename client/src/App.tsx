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
  const [selectedId, setSelectedId] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [openNewModal, setOpenNewModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState<boolean>(false);
  const { getTasks, deleteTask, queryClient, updateTask } = useTasks();
  const { isLoading, data: tasks } = useQuery(["tasks", activeFilter], getTasks);

  const handleEdit = async (e: FormEvent) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    try {
      await updateTask(selectedId, { title, description });
      queryClient.invalidateQueries("tasks");
      setOpenEditModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => { 
    try {
      await deleteTask(selectedId);
      queryClient.invalidateQueries("tasks");
      setOpenDeleteAlert(false);
    } catch(error) {
      console.log(error);
    }
  }

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
        setSelectedId={setSelectedId}
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
          selectedId={selectedId}
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
