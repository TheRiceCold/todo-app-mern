import styled from "styled-components";
import { FC, useState } from "react";

import AlertDialog from "./AlertDialog";
import EditModal from "./FormModal";
import TaskItem from "./TaskItem";

const TaskList: FC = () => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <Container>
      <TaskItem 
        id={100} 
        label="Todo1" 
        setOpenEditModal={setOpenEditModal}
        setOpenDeleteAlert={setOpenDeleteAlert}
      />
      {openDeleteAlert &&
        <AlertDialog 
          handleClick={handleDelete}
          handleClose={() => setOpenDeleteAlert(false)}
          title="Are you sure you want to delete this task?"
        />
      }
      {openEditModal && 
        <EditModal 
          title="EDIT TODO"
          submitLabel="Update"
          handleSubmit={handleEdit}
          handleClose={() => setOpenEditModal(false)}
        /> 
      }
    </Container>
  );
};

export default TaskList;

const Container = styled.div`
  overflow: auto;
  max-height: 60vh;
`;
