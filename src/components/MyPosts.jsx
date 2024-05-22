import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const MyPosts = () => {
  const { posts, setPosts } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };
  const myPosts = posts.filter((post) => post.author === currentUser.email);

  return (
    <div className="flex flex-col justify-center items-center ">
      {myPosts.map((post) => {
        const isCurrentUserAuthor = post.author === currentUser.email;
        return (
          <div
            key={post.id}
            className=" bg-gray-100 w-1/2 px-10 py-5 m-2 border-2 border-solid border-black">
            <p className="text-blue-700 font-bold">{post.author}</p>
            <h3>{post.title}</h3>
            <p>{post.text}</p>

            {isCurrentUserAuthor && (
              <div className="my-2">
                <button aria-label="edit">
                  <Link to={`/edit/${post.id}`}>Edit</Link>
                </button>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyPosts;
