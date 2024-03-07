import React, { useState } from "react";
import ReactQuill, {Quill} from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./index.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";

Quill.register(
    {
      "formats/emoji": quillEmoji.EmojiBlot,
      "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
      "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
      "modules/emoji-shortname": quillEmoji.ShortNameEmoji
    },
    true
);
const RichTextEditor = ({ convertedText, setConvertedText }) => {
  const quillModules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ["bold", "italic", "underline", "strike", 'emoji'],
      ["image", "video", "link"],

    ],
    "emoji-toolbar": true,
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
