import {Link} from "react-router-dom"

function Nav2() {
  return (
    <div>
   
    <nav>
        <ul>
           
        <li><Link to="/Daily"> Daily Tasks</Link></li>
            <li> <Link to="/Weekly"> Weekly Tasks</Link></li>
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

export default Nav2;