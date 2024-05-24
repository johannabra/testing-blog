import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";
import Private from "./components/Private";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import { BlogPostProvider } from "./context/BlogContext";
import EditPage from "./pages/EditPage";
import { CommentProvider } from "./context/ResponseContext";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <BlogPostProvider>
      <CommentProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Private />}>
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<UserPage />} />
              <Route path="/edit/:postId" element={<EditPage />} />
            </Route>

            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/" element={<h1>I am a public page</h1>} />
          </Routes>
        </BrowserRouter>
      </CommentProvider>
    </BlogPostProvider>
  );
};

export default App;
