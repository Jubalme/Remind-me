
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header1 from "./componenets/header/Header1";
import Home from "./pages/Home";
import About from "./pages/About";
//import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import DailyTasks from "./pages/DailyTasks";
import WeeklyTasks from "./pages/WeeklyTasks";
import AddTask from "./pages/AddTask";
import CalenderView from "./pages/CalenderView";
import MyNote from "./pages/MyNote";
import MyProfile from "./pages/MyProfile";

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
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
         <Route path="/Daily" element={<DailyTasks />} />
       <Route path="/Weekly" element={<WeeklyTasks />} />
       <Route path="/Calender" element={<CalenderView />} />
             <Route path="/Add" element={<AddTask />} />
             <Route path="/Notes" element={<MyNote />} />
             <Route path="/Profile" element={<MyProfile />} />
   
      </Routes>
    </Router>
  );
};

export default App;
