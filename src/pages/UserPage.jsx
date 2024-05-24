import CreatePost from "../components/CreatePost";
import MyPosts from "../components/MyPosts";

const UserPage = () => {
  return (
    <main className="flex flex-col ">
      <h1 className="text-pink-700 my-2">Profile page</h1>

      <CreatePost />
      <h2 className="flex flex-col justify-center items-center text-pink-700">
        My posts:
      </h2>
      <MyPosts />
    </main>
  );
};

export default UserPage;
