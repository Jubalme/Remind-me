
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 h-full w-1/4 p-4 overflow-y-auto">
      <div className="space-y-4">
      <ul>
        <li className="py-2 hover:text-blue-300 p-2 rounded"><Link to="/Daily"> Daily Tasks</Link></li>
        <li className="py-2 hover:text-blue-300 p-2 rounded"><Link to="/Weekly"> Weekly Tasks</Link></li>
        <li className="py-2 hover:text-blue-300 p-2 rounded"><Link to="/Calender"> Calender View</Link></li>
        <li className="py-2 hover:text-blue-300 p-2 rounded"><Link to="/Add"> Add Task</Link></li>
        <li className="py-2 hover:text-blue-300 p-2 rounded"><Link to="/Notes"> My Notes</Link></li>
        <li className="py-2 hover:text-blue-300 p-2 rounded"><Link to="/Completed"> completed Tasks</Link></li>
        <li className="py-2 hover:text-blue-300 p-2 rounded"><Link to="/Profile">My Profile</Link></li>        
      </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
