// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import DailyTasks from "./pages/DailyTasks"
// import WeeklyTasks from "./pages/WeeklyTasks"
// import SignUp from "./pages/SignUp"
// import CalenderView from "./pages/CalenderView"
// import AddTask from "./pages/AddTask"
// import MyNote from "./pages/MyNote"
// import CompletedTasks from "./pages/CompletedTasks"
// import MyProfile from "./pages/MyProfile"
// import Logout from "./pages/Logout"
// import RegisteredPage from "./pages/RegisteredPage"
// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Daily" element={<DailyTasks />} />
//           <Route path="/Weekly" element={<WeeklyTasks />} />
//           <Route path="/SignUp" element={<SignUp/>} />
//           <Route path="/Calender" element={<CalenderView/>} />
//           <Route path="/Add" element={<AddTask/>} />
//           <Route path="/Notes" element={<MyNote/>} />
//           <Route path="/Completed" element={<CompletedTasks/>} />
//           <Route path="/Profile" element={<MyProfile/>} />
//           <Route path="/Logout" element={<Logout/>} />
//           <Route path="/Registered" element={<RegisteredPage/>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header1 from "./componenets/header/Header1";
import Home from "./pages/Home";
import About from "./pages/About";
//import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Header1 isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      <Route path="/register" element={<SignUp onSubmit={() => setIsAuthenticated(true)} />} />
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/register" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
