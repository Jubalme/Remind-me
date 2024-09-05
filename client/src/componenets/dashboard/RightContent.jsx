
import { Route, Routes } from 'react-router-dom';
import DailyTasks from '../MenuItems/DailyTasks';
import WeeklyTasks from '../MenuItems/WeeklyTasks';
import CalenderView from '../MenuItems/CalenderView';
import AddTask from '../MenuItems/AddTask';
import MyNote from '../MenuItems/MyNote';
import MyProfile from '../MenuItems/MyProfile';


const RightContent = () => {
  return (
    <div className="flex-1 h-full p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
 
      <Routes>
      <Route path="/Daily" element={<DailyTasks />} />
       <Route path="/Weekly" element={<WeeklyTasks />} />
       <Route path="/Calender" element={<CalenderView />} />
             <Route path="/Add" element={<AddTask />} />
             <Route path="/Notes" element={<MyNote />} />
             <Route path="/Profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
};

export default RightContent;
