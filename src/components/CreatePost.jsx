import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";

const CreatePost = () => {
  const { posts, setPosts } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Posts: ", posts);
  }, [posts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    else if (name === "text") setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && text !== "") {
      const newPost = {
        id: Date.now(),
        title: title,
        text: text,
        author: currentUser.email,
      };
      setPosts([newPost, ...posts]);
      setTitle("");
      setText("");
      console.log("Submitted input:", newPost);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <form
        className="flex flex-col w-1/2 m-10 p-2 border-2 border-solid border-black "
        onSubmit={handleSubmit}>
        <input
          className="border-solid border-2"
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          className="border-solid border-2"
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Text"></textarea>
        <button className="m-2" type="submit">
          Add post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
