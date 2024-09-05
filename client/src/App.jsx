
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header1 from "./componenets/header/Header1";
import Home from "./pages/Home";
import About from "./pages/About";
//import Register from "./pages/Register";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    toast.success('Successfully authenticated!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <Router>
      <Header1 isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/signup"
          element={<SignUp onAuth={handleAuthentication} />}
        />
   <Route
          path="/login"
          element={<Login onAuth={handleAuthentication} />}
        />
         <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
        />
   
      </Routes>
    </Router>
  );
};

export default App;
