import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const Posts = () => {
  const { posts, setPosts } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const filterPosts = (category) => {
    if (category === "all") {
      return posts;
    } else {
      return posts.filter((post) => post.category === category);
    }
  };

  const filteredPosts = filterPosts(selectedCategory);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        Filter by category:{" "}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="tech">Tech</option>
          <option value="design">Design</option>
          <option value="food">Food</option>
        </select>
      </div>

      {filteredPosts.map((post) => {
        const isCurrentUserAuthor = post.author === currentUser?.email;
        return (
          <div
            key={post.id}
            className="m-2 px-20 py-5 w-1/2 border-2 border-solid border-black bg-gray-100">
            <p className="text-gray-500">Category: {post.category}</p>
            <p className="text-indigo-400 font-bold">
              Written by: {post.author}
            </p>
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p>{post.text}</p>
            {isCurrentUserAuthor && (
              <div className="my-2">
                <button aria-label="edit">
                  <Link to={`/edit/${post.id}`}>Edit</Link>
                </button>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            )}
            <div className="bg-gray-50 p-2 my-4 border border-solid border-gray-500">
              <Comments postId={post.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
