import { Modal } from "reactstrap";
import "./index.css";
import gallery from "../../assets/images/gallery.png";
import face from "../../assets/images/face.png";
import gif from "../../assets/images/gif.png";
import tag from "../../assets/images/tag.png";
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
        <div className="top">
          <div className="name">
              <p className="initial">P</p>
              <p>Patrick James</p>
          </div>
          <RxCross2/>
        </div>
        <textarea placeholder="What's happening..."/>
        <div>
          <div>
            <div><img src={gallery} alt="gallery"></img></div>
            <div><img src={face} alt="face"></img></div>
            <div><img src={gif} alt="gif"></img></div>
            <div>
              <div>
              <img src={tag} alt="tag"></img>
              <p>E.g Bitcoin</p>
              </div>
            </div>
          </div>
          <button>Push</button>
        </div>
    </div>
  </Modal>
  )
};

export default PostModal;