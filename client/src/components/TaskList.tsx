import styled from "styled-components";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
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
    </Container>
  );
};

export default TaskList;

const Container = styled.div`
  overflow: auto;
  max-height: 60vh;
`;
