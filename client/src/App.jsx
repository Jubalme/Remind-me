import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DailyTasks from "./pages/DailyTasks"
import WeeklyTasks from "./pages/WeeklyTasks"
import Login from "./pages/Login"
import CalenderView from "./pages/CalenderView"
import AddTask from "./pages/AddTask"
import MyNote from "./pages/MyNote"
import CompletedTasks from "./pages/CompletedTasks"
import MyProfile from "./pages/MyProfile"
import Logout from "./pages/Logout"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Daily" element={<DailyTasks />} />
          <Route path="/Weekly" element={<WeeklyTasks />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Calender" element={<CalenderView/>} />
          <Route path="/Add" element={<AddTask/>} />
          <Route path="/Notes" element={<MyNote/>} />
          <Route path="/Completed" element={<CompletedTasks/>} />
          <Route path="/Profile" element={<MyProfile/>} />
          <Route path="/Logout" element={<Logout/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App