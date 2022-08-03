import { SetStateAction, Dispatch, FC } from "react";
import TaskItem from "./TaskItem";

interface IProps {
  setOpenEditModal: Dispatch<SetStateAction<boolean>>;
  setOpenDeleteAlert: Dispatch<SetStateAction<boolean>>;
};

const TaskList: FC<IProps> = ({ 
  setOpenEditModal,
  setOpenDeleteAlert,
}) => (
  <main style={{ overflow: "auto", maxHeight: "60vh" }}>
    <TaskItem 
      id={100} 
      label="Todo1" 
      setOpenEditModal={setOpenEditModal}
      setOpenDeleteAlert={setOpenDeleteAlert}
    />
  </main>
);

export default TaskList;
