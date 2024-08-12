
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DailyTasks from "./pages/DailyTasks"
import CalenderView from "./pages/CalenderView"
import Login from "./pages/Login"
import Memo from "./pages/Memo"
import RecentlyFinishedTasks from "./pages/RecentlyFinishedTasks"
import WeeklyTasks from "./pages/WeeklyTasks"
 export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Calender" element={<CalenderView />} />
        <Route path="/DailyTasks" element={<DailyTasks />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Memo" element={<Memo />} />
        <Routes path="/Finished" element ={<RecentlyFinishedTasks />} />
      <Routes path="/Weekly" element={<WeeklyTasks />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}
