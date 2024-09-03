import {Link} from "react-router-dom"

function Nav2() {
  return (
    <div  className="w-64 h-screen bg-blue-800 text-white flex flex-col">
      <div className="p-6">
      <h1 className="text-2xl font-semibold">My Dashboard</h1>
    </div>
    <nav className="flex-1 px-4">
      <ul>
        <li className="py-2 hover:text-blue-300"><Link to="/Daily"> Daily Tasks</Link></li>
        <li className="py-2 hover:text-blue-300"><Link to="/Weekly"> Weekly Tasks</Link></li>
        <li className="py-2 hover:text-blue-300"><Link to="/Calender"> Calender View</Link></li>
        <li className="py-2 hover:text-blue-300"><Link to="/Add"> Add Task</Link></li>
        <li className="py-2 hover:text-blue-300"><Link to="/Notes"> My Notes</Link></li>
        <li className="py-2 hover:text-blue-300"><Link to="/Completed"> completed Tasks</Link></li>
        <li className="py-2 hover:text-blue-300"><Link to="/Profile">My Profile</Link></li>

        
      </ul>
    </nav>

   </div>
   
  )
}

export default Nav2;