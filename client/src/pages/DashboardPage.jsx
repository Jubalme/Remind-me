import  { useState } from 'react';
import LeftSidebar from '../componenets/dashboard/LeftSideBar';
import RightContent from '../componenets/dashboard/RightContent';
import TopBar from '../componenets/dashboard/TopBar';

const DashboardPage = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`h-screen flex flex-col ${theme}`}>
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <div className="flex h-full">
        <LeftSidebar />
        <RightContent />
      </div>
    </div>
  );
};

export default DashboardPage;
