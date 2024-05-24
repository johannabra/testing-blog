import { useContext } from "react";
import { ResponseContext } from "../context/ResponseContext";
import { AuthContext } from "../context/AuthContext";

const Comments = ({ postId }) => {
  const { comments, setComments } = useContext(ResponseContext);
  const { currentUser } = useContext(AuthContext);

  const postComments = comments.filter((comment) => comment.postId === postId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const author = currentUser.email;
    const text = e.target.elements.comment.value;
    const newComment = {
      id: Date.now(),
      postId,
      author,
      text,
    };
    setComments([...comments, newComment]);
    e.target.reset();
  };
  const handleDelete = (commentId) => {
    const updatedComment = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComment);
  };

  return (
    <div>
      <h6 className="font-bold text-sm">Comments</h6>
      {postComments.length === 0 ? <p>No comments yet.</p> : null}
      {postComments.map((comment) => (
        <div
          className="flex flex-col border-b border-black m-1 border-opacity-10 "
          key={comment.id}>
          <p className=" text-pink-900 text-sm font-semibold">
            {comment.author}
          </p>
          <div className="flex flex-row place-content-between">
            <p>{comment.text}</p>
            <button
              className="text-xs "
              onClick={() => handleDelete(comment.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <CommentForm onSubmit={handleSubmit} />
    </div>
  );
};

const CommentForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="border border-solid border-indigo-300"
        name="comment"
        rows="1"
        cols="50"
        required></textarea>
      <br />
      <button type="submit" className="text-sm">
        Add Comment
      </button>
    </form>
  );
};

export default Comments;
