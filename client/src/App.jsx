import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DailyTasks from "./pages/DailyTasks"
import WeeklyTasks from "./pages/WeeklyTasks"
import SignUp from "./pages/Home"
import CalenderView from "./pages/CalenderView"
import AddTask from "./pages/AddTask"
import MyNote from "./pages/MyNote"
import CompletedTasks from "./pages/CompletedTasks"
import MyProfile from "./pages/MyProfile"
import Logout from "./pages/Logout"
import RegisteredPage from "./pages/RegisteredPage"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Daily" element={<DailyTasks />} />
          <Route path="/Weekly" element={<WeeklyTasks />} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Calender" element={<CalenderView/>} />
          <Route path="/Add" element={<AddTask/>} />
          <Route path="/Notes" element={<MyNote/>} />
          <Route path="/Completed" element={<CompletedTasks/>} />
          <Route path="/Profile" element={<MyProfile/>} />
          <Route path="/Logout" element={<Logout/>} />
          <Route path="/Registered" element={<RegisteredPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App