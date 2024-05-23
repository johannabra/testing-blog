import { createContext, useState, useEffect, useContext } from "react";

export const BlogContext = createContext();

export const useBlogContext = () => {
  return useContext(BlogContext);
};

export const BlogPostProvider = (props) => {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(localStorage.getItem("posts")) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </BlogContext.Provider>
  );
};
