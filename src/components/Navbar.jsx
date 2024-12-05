import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Rick & Morty
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
