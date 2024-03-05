import { Modal } from "reactstrap";
import "./index.css";
import gallery from "../../assets/images/gallery.png";
import face from "../../assets/images/face.png";
import gif from "../../assets/images/gif.png";
import tag from "../../assets/images/tag.png";
import { RxCross2 } from "react-icons/rx";
import RichTextEditor from "../RichTextEditor";
import { useState } from "react";
import { toast } from "react-toastify";

const validateArticle = (text) => {
  if (text.length < 100) {
    return {
      validStatus: false,
      errors: "Article should be atleast 100 characters",
    };
  }

  return {
    validStatus: true,
    errors: "",
  };
};

const PostModal = ({ toggle, isOpen, setIsOpen }) => {
  const [convertedText, setConvertedText] = useState("");

  const uploadPost = (text) => {
    // TODO: upload post to server
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    console.log(convertedText);
    const { validStatus, errors } = validateArticle(convertedText);
    if (!validStatus) {
      toast.error(errors);
    } else {
      uploadPost(convertedText)
        .then(() => {
          setIsOpen(false);
          setConvertedText("");
          toast.success("Post added successfully");
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  };

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
        <RichTextEditor
          convertedText={convertedText}
          setConvertedText={setConvertedText}
        />
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
          <button className="button" onClick={handleAddPost}>
            Push
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PostModal;
