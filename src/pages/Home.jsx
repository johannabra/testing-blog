import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
const Home = () => {
  return (
    <main className="flex flex-col">
      <h1 className="text-pink-700">Home page</h1>

      <Posts />
    </main>
  );
};

export default Home;
