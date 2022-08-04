import { SetStateAction, Dispatch, FC } from "react";
import { useTasks } from "../contexts/TasksProvider";

import ITask from "../interfaces/ITask";
import TaskItem from "./TaskItem";

interface IProps {
  tasks: ITask[];
  loadingTasks: boolean;
  setSelectedId: Dispatch<SetStateAction<string>>;
  setOpenEditModal: Dispatch<SetStateAction<boolean>>;
  setOpenDeleteAlert: Dispatch<SetStateAction<boolean>>;
};

const TaskList: FC<IProps> = ({ 
  tasks,
  loadingTasks,
  setSelectedId,
  setOpenEditModal,
  setOpenDeleteAlert,
}) => (
  <main style={{ overflow: "auto", maxHeight: "60vh" }}>
    {!loadingTasks && tasks.map((task: ITask) => (
      <TaskItem 
        task={task} 
        key={task._id}
        setSelectedId={setSelectedId}
        isCompleted={task.isCompleted}
        setOpenEditModal={setOpenEditModal}
        setOpenDeleteAlert={setOpenDeleteAlert}
      />
    ))}
  </main>
);

export default TaskList;
