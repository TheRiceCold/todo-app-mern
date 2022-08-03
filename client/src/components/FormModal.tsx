import Modal from "./Modal";

interface IProps {
  title: String;
  handleClose: () => Dispatch<SetStateAction<boolean>>;
};

const FormModal = ({ title, handleClose }) => {
  return (
    <Modal 
      width={500}
      height={400} 
      title={title}
      handleClose={handleClose}
    >
      <form>
        <input />
      </form>
    </Modal>
  );
};

export default FormModal;
