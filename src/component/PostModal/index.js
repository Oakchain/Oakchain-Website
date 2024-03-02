import { Modal } from "reactstrap";
import "./index.css";
import { RxCross2 } from "react-icons/rx";

const PostModal = ({toggle, isOpen, setIsOpen}) => {
  return (
    <Modal
    isOpen={isOpen}
    toggle={toggle}
    className="modal-dialog-centered"
    // modalClassName="oak-modal__card"
  >
    <div>
        <div>
            <p>P</p>
            <p>Patrick James</p>
        </div>
        <RxCross2 />
    </div>
  </Modal>
  )
};

export default PostModal;