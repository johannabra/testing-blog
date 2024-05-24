import Nav from "./Nav";
const Header = () => {
  return (
    <header className="flex justify-between mx-10 border-b-2 border-pink-600">
      <h1>TjaTja Bloggen</h1>
      <Nav />
    </header>
  );
};

export default Header;
