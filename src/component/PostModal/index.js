import { Modal } from "reactstrap";
import "./index.css";
import gallery from "../../assets/images/gallery.png";
import face from "../../assets/images/face.png";
import gif from "../../assets/images/gif.png";
import tag from "../../assets/images/tag.png";
import { RxCross2 } from "react-icons/rx";
import RichTextEditor from "../RichTextEditor";

const PostModal = ({ toggle, isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="modal-dialog-centered"
      // modalClassName="oak-modal__card"
    >
      <div className="container">
        <div className="top">
          <div className="name">
            <div className="initial">
              <p>P</p>
            </div>
            <p className="full">Patrick James</p>
          </div>
          <RxCross2
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(false)}
            size={28}
          />
        </div>
        <RichTextEditor />
        <div className="bottom">
          <div className="icons">
            <div className="icon">
              <img src={gallery} alt="gallery"></img>
            </div>
            <div className="icon">
              <img src={face} alt="face"></img>
            </div>
            <div className="icon">
              <img src={gif} alt="gif"></img>
            </div>
            <div className="icon-extra">
              <div className="icon" style={{ backgroundColor: "#FFE0D2" }}>
                <img src={tag} alt="tag"></img>
              </div>
              <p>E.g Bitcoin</p>
            </div>
          </div>
          <button className="button" disabled>
            Push
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PostModal;
