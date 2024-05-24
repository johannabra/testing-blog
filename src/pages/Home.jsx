import Posts from "../components/Posts";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="flex flex-col">
      '
      <div className="flex flex-row justify-evenly items-center">
        <h1 className="text-pink-700 my-2">Home page</h1>
        <Link to="/profile">
          <button className="m-2 p-2 bg-blue-500 text-white">
            Create Post
          </button>
        </Link>
      </div>
      <Posts />
    </main>
  );
};

export default Home;
