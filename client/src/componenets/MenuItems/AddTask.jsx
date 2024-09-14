import { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
    const [task, setTask] = useState({ title: '', description: '' });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const addTask = async () => {
        try {
            await axios.post('http://localhost:5000/tasks', task);
            setTask({ title: '', description: '' });
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div>
            <h2>Add Task</h2>
            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Task Description"
                value={task.description}
                onChange={handleChange}
            ></textarea>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
