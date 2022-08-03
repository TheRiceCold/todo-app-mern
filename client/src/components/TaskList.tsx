import styled from "styled-components";
import { FC, useState } from "react";

import AlertDialog from "./AlertDialog";
import EditModal from "./EditModal";
import TaskItem from "./TaskItem";

const TaskList: FC = () => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

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
          title="Are you sure you want to delete this task?"
          handleClick={() => console.log("delete")}
          handleClose={() => setOpenDeleteAlert(false)}
        />
      }
      {openEditModal && <EditModal /> }
    </Container>
  );
};

export default TaskList;

const Container = styled.div`
  overflow: auto;
  max-height: 60vh;
`;
