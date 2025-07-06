import React, { useState } from 'react';
import './App.css';
import TaskItem from './Components/TaskItem';
import StatusComp from './Components/StatusComp';

function App() {
  const [newTask, setNewTask] = useState({
    taskName: '',
    description: '',
    date: '',
    time: '',
    status: 'not-completed'
  });

  const [myTasks, setMyTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.taskName.trim() === '') return;
    const taskWithId = { ...newTask, id: Date.now() }; // Add unique id
    setMyTasks((prev) => [...prev, taskWithId]);
    setNewTask({
      taskName: '',
      description: '',
      date: '',
      time: '',
      status: 'not-completed'
    });
  };

  const deleteTask = (id) => {
    setMyTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setMyTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: 'completed' } : task
      )
    );
  };

  const editTask = (id, updatedData) => {
    setMyTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updatedData } : task
      )
    );
  };

  const filteredTasks =
    filterStatus === 'all'
      ? myTasks
      : myTasks.filter((task) => task.status === filterStatus);

  return (
    <div className='main-container'>
      <div className='container'>
        <h1 className='heading'>To-Do List</h1>
        <form onSubmit={addTask}>
          <label className='new-task' htmlFor='TASK_NAME'>Add a new task:</label>
          <input
            type="text"
            className="form-control form-control-lg mt-3 mb-3"
            placeholder="Enter your task here..."
            name="taskName"
            value={newTask.taskName}
            onChange={handleInput}
            id='TASK_NAME'
          />
          <label className='new-task' htmlFor='DESCRIPTION'>Add a description:</label>
          <textarea
            className="form-control form-control-lg mt-3 mb-3"
            placeholder="Enter a description here..."
            name="description"
            value={newTask.description}
            onChange={handleInput}
            id='DESCRIPTION'
          ></textarea>
          <label className='new-task' htmlFor='DATE'>Select a date to complete the task:</label>
          <input
            type="date"
            className="form-control form-control-lg mt-3 mb-3"
            name="date"
            value={newTask.date}
            onChange={handleInput}
            id='DATE'
          />
          <label className='new-task' htmlFor='TIME'>Select a time to complete the task:</label>
          <input
            type="time"
            className="form-control form-control-lg mt-3 mb-3"
            name="time"
            value={newTask.time}
            onChange={handleInput}
            id='TIME'
          />
          <div className='button-container d-flex justify-content-center align-items-center m-3 gap-2'>
            <button type="submit" className="btn btn-primary mt-3">Add Task</button>
          </div>
        </form>

        <StatusComp filterStatus={filterStatus} setFilterStatus={setFilterStatus} />

        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            completeTask={completeTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}

        <div className="footer text-center mt-4 p-3 bg-dark text-white">
          <p className="mb-0">© 2025 Your To-Do List</p>
        </div>
      </div>
    </div>
  );
}

export default App;
