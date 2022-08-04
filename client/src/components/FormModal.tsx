import styled from "styled-components";
import { useTasks } from "../contexts/TasksProvider";
import { FC, FormEvent, useRef } from "react";
import { useQuery } from "react-query";
import ITask from "../interfaces/ITask";
import Modal from "./Modal";

interface IProps {
  title: string;
  selectedId?: string;
  submitLabel: string;
  handleClose: () => void;
  handleSubmit: (e: FormEvent, title: string, description: string) => void;
};

const FormModal: FC<IProps> = ({ 
  title, 
  selectedId,
  submitLabel,
  handleClose,
  handleSubmit, 
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const { getTaskById } = useTasks();
  const { data: taskToEdit } = useQuery(
    ["edit_task", selectedId], 
    getTaskById, 
    { 
      enabled: !!selectedId,
      onSuccess: task => {
        const title: HTMLInputElement | null = titleRef?.current;
        const description: HTMLTextAreaElement | null = descriptionRef?.current;
        title!.value = task?.title as string;
        description!.value = task?.description as string;
      }
    }
  );
  
  return (
    <Modal 
      width={500}
      height={400} 
      title={title}
      handleClose={handleClose}
    >
      <Form onSubmit={async e => { 
        const title: HTMLInputElement | null = titleRef?.current;
        const description: HTMLTextAreaElement | null = descriptionRef?.current;
        await handleSubmit(e, title!.value, description!.value);
      }}>
        <input 
          id="title" 
          type="text" 
          ref={titleRef}
          placeholder="Title" 
        />
        <textarea 
          rows={4}
          id="description" 
          ref={descriptionRef}
          placeholder="Description (Optional)" 
        >
          </textarea>
        <input type="submit" value={submitLabel} />
      </Form>
    </Modal>
  );
};

export default FormModal;

const Form = styled.form`
  height: 100%;
  display: flex; 
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  input[type="text"], textarea {
    width: 100%;
    resize: none;
    color: #455963;
    font-size: 16px;
    margin-top: 25px;
    padding: 10px 20px;
    box-shadow: 0 -1px 0 #e2e4ea inset;
  }

  input[type="submit"] {
    color: #fff;
    height: 50px;
    width: 50%;
    font-size: 16px;
    cursor: pointer;
    margin-top: 30px;
    font-weight: 600;
    border-radius: 25px;
    transition: all 0.2s ease;
    background-color: cornflowerblue;
    &:hover {
      color: cornflowerblue;
      background-color: #fff;
      border: 2px solid cornflowerblue;
    }
  }
`;
