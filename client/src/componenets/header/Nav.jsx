import {Link} from "react-router-dom"
import Logo from "./Logo"
import Webname from "./Webname"
function Nav() {
  return (
   <div>
    <Logo />    
    <Webname /> 
    <nav>
        <ul>
            <li><Link to="/" > Home </Link></li>
            <li><Link to="/About"> About</Link></li>
            <li><Link to="/Daily"> Daily Tasks</Link></li>
            <li> <Link to="/Weekly"> Weekly Tasks</Link></li>
            <li><Link to="/Login"> Login</Link></li>
            <li><Link to="/Calender"> Calender View</Link></li>
            <li><Link to="/Add"> Add Task</Link></li>
            <li><Link to="/Notes"> My Notes</Link></li>
            <li><Link to="/Completed"> Completed Tasks</Link></li>
            <li><Link to="/Profile"> My Profile</Link></li>
            <li><Link to="/Logout"> Logout</Link></li>
        </ul>
    </nav>
   </div>
  )
}

export default Nav