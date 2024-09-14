
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
import DailyTasks from './componenets/MenuItems/DailyTasks';
import WeeklyTasks from './componenets/MenuItems/WeeklyTasks';
import CalenderView from './componenets/MenuItems/CalenderView';
import AddTask from './componenets/MenuItems/AddTask';
import MyNote from './componenets/MenuItems/MyNote';
import MyProfile from './componenets/MenuItems/MyProfile';
import CompletedTasks from './componenets/MenuItems/CompletedTasks';
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
    <Route path="/Daily" element={<DailyTasks />} />
       <Route path="/Weekly" element={<WeeklyTasks />} />
       <Route path="/Calender" element={<CalenderView />} />
             <Route path="/Add" element={<AddTask />} />
             <Route path="/Notes" element={<MyNote />} />
             <Route path="/Profile" element={<MyProfile />} />
             <Route path="/Completed" element={<CompletedTasks />} />
             
      </Routes>
    </Router>
  );
};

export default App;
