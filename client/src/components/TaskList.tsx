import DeleteAlertDialog from "./DeleteAlertDialog";
import styled from "styled-components";
import { FC, useState } from "react";
import TaskItem from "./TaskItem";

const TaskList: FC = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState<Boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<Boolean>(false);

  return (
    <Container>
      <TaskItem 
        label="Todo1"
        id={100}
      />
      <DeleteAlertDialog 
        title="Are you sure you want to delete this task?"
      />
    </Container>
  );
};

export default TaskList;

const Container = styled.div`
  overflow: auto;
  max-height: 60vh;
`;
