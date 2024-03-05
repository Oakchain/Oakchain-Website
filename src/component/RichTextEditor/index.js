import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./index.css";

const RichTextEditor = ({ convertedText, setConvertedText }) => {
  return (
    <div className="RichTextEditor">
      <ReactQuill
        theme="snow"
        value={convertedText}
        onChange={setConvertedText}
        placeholder="Write something awesome..."
      />
    </div>
  );
};

export default RichTextEditor;
