/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header1 = ({ isAuthenticated }) => {

  const handleLogout = () => {
    // Handle logout logic
    toast.success("Logged out successfully!");
  };

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">MyLogo</Link>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-4">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:underline">
          About
        </NavLink>
        <NavLink to="/signup" className="hover:underline">
          Register
        </NavLink>
        <NavLink to="/login" className="hover:underline">
          Login
        </NavLink>
        {isAuthenticated && (
          <NavLink to="/dashboard" className="hover:underline flex items-center">
            <IconContext.Provider value={{ className: "inline-block mr-1" }}>
              <MdDashboard />
            </IconContext.Provider>
            Dashboard
          </NavLink>
        )}
      </nav>

      {/* Logout Button */}
      {isAuthenticated && (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header1;
