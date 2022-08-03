import Modal from "./Modal";
import { FC } from "react";

interface IProps {
  title: string;
  submitLabel: string;
  handleClose: () => void;
  handleSubmit: () => void;
};

const FormModal: FC<IProps> = ({ 
  title, 
  submitLabel,
  handleClose,
  handleSubmit, 
}) => (
  <Modal 
    width={500}
    height={400} 
    title={title}
    handleClose={handleClose}
  >
    <form onSubmit={handleSubmit}>
      <input />
      <input type="submit" value={submitLabel} />
    </form>
  </Modal>
);

export default FormModal;
