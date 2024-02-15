import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Logout = ({ isVisible }) => {
  return (
    <>
      <Modal isOpen={isVisible}>
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
};

export default Logout;
