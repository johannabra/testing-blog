import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const EditPost = () => {
  const { postId } = useParams();
  const { posts, setPosts } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    const selectedPost = posts.find((post) => post.id === parseInt(postId));
    if (selectedPost) {
      setTitle(selectedPost.title);
      setText(selectedPost.text);
    }
  }, [postId, posts]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    const updatedPosts = posts.map((post) =>
      post.id === parseInt(postId) ? { ...post, title, text } : post
    );
    setPosts(updatedPosts);
    setRedirectToHome(true);
  };

  return (
    <div className="flex flex-col w-1/2 m-10 p-2 border-2 border-solid border-black">
      <h2>Edit Post</h2>
      <label>Title:</label>
      <input
        className="bg-gray-100"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <label>Text:</label>
      <textarea
        className="bg-gray-100"
        value={text}
        onChange={handleTextChange}
      />
      <div className="m-2">
        <button onClick={handleSave} aria-label="save">
          <Link to="/home"> Save </Link>
        </button>
        <button aria-label="cancel">
          <Link to="/home">Cancel</Link>
        </button>
      </div>
    </div>
  );
};

export default EditPost;
