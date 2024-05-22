import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Comments from "./Comments";
const Posts = () => {
  const { posts, setPosts } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {posts.map((post) => {
        const isCurrentUserAuthor = post.author === currentUser.email;
        return (
          <div
            key={post.id}
            className="m-2 px-20 py-5 w-1/2 border-2 border-solid border-black">
            <p className="text-blue-700 font-bold">{post.author}</p>
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.text}</p>

            {isCurrentUserAuthor && (
              <div className="my-2">
                <button aria-label="edit">
                  <Link to={`/edit/${post.id}`}>Edit</Link>
                </button>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            )}
            <div className="bg-gray-50 p-2 my-4 border border-solid border-gray-400">
              <Comments postId={post.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
