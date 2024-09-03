


import{ useState } from 'react';

const DashComp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">To-Do List</h2>
            <div className="flex mb-4">
              <input 
                type="text" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task" 
                className="flex-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button 
                onClick={addTask} 
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Add
              </button>
            </div>
            <ul>
              {tasks.map((task, index) => (
                <li 
                  key={index} 
                  className={`flex justify-between items-center p-2 mb-2 rounded-lg border ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`}
                >
                  <span 
                    className={`flex-1 text-gray-700 ${task.completed ? 'line-through' : ''}`}
                  >
                    {task.text}
                  </span>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => toggleTaskCompletion(index)} 
                      className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
                    >
                      {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button 
                      onClick={() => deleteTask(index)} 
                      className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};



const Header = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h2 className="text-xl font-semibold text-gray-800">Welcome to your Dashboard</h2>
    <div>
      <button className="text-blue-600 hover:text-blue-800">Logout</button>
    </div>
  </header>
);

export default DashComp;
