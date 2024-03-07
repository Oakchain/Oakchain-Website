import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./index.css";

const RichTextEditor = ({ convertedText, setConvertedText }) => {
  const quillModules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      ["image", "video", "link"],
    ],
  };
  return (
    <div className="RichTextEditor">
      <ReactQuill
        theme="snow"
        value={convertedText}
        onChange={setConvertedText}
        placeholder="Write something awesome..."
        modules={quillModules}
      />
    </div>
  );
};

export default RichTextEditor;
