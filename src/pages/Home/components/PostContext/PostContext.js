import React, { createContext, useState, useContext } from "react";

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [postContent, setPostContent] = useState(null);

  const setPost = (content) => {
    setPostContent(content);
  };

  return (
    <PostContext.Provider value={{ postContent, setPost }}>
      {children}
    </PostContext.Provider>
  );
};
