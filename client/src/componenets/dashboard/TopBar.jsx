/* eslint-disable react/prop-types */

import { IconButton, Switch } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TopBar = ({ theme, toggleTheme }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Task & Calendar Management</div>
      <div className="flex items-center">
        <IconButton>
          <AccountCircleIcon className="text-gray-800 dark:text-white" />
        </IconButton>
        <Switch checked={theme === 'dark'} onChange={toggleTheme} />
      </div>
    </div>
  );
};

export default TopBar;
