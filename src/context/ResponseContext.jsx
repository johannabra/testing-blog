import { createContext, useState, useEffect } from "react";

export const ResponseContext = createContext();

export const CommentProvider = (props) => {
  const initialComments = JSON.parse(localStorage.getItem("comments")) || [];
  const [comments, setComments] = useState(initialComments);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <ResponseContext.Provider value={{ comments, setComments }}>
      {props.children}
    </ResponseContext.Provider>
  );
};
