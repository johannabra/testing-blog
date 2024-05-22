import CreatePost from "../components/CreatePost";
import MyPosts from "../components/MyPosts";

const UserPage = () => {
  return (
    <main className="flex flex-col">
      <h1 className="text-pink-700">Profile page</h1>

      <CreatePost />
      <MyPosts />
    </main>
  );
};

export default UserPage;
