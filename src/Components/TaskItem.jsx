import React, { useState } from 'react';

const TaskItem = ({ id, taskName, description, date, time, status, deleteTask, completeTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    taskName,
    description,
    date,
    time
  });

  const bgColor = status === 'completed' ? 'bg-success text-white' : 'bg-warning';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    editTask(id, editedTask);
    setIsEditing(false);
  };

  return (
    <div>
      <ul className='task-list mt-4'>
        <li className={`task-item d-flex justify-content-between align-items-center p-3 rounded ${bgColor}`}>
          <div className='task-details'>
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="taskName"
                  value={editedTask.taskName}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                <textarea
                  name="description"
                  value={editedTask.description}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                <input
                  type="date"
                  name="date"
                  value={editedTask.date}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                <input
                  type="time"
                  name="time"
                  value={editedTask.time}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
              </>
            ) : (
              <>
                <h5 className='task-title'>Task Title: {taskName}</h5>
                <p className='task-description'>Task Description: {description}</p>
                <p className='task-date'>Due Date: {date}</p>
                <p className='task-time'>Due Time: {time}</p>
                <p className='task-status'>Status: {status === 'completed' ? 'Completed' : 'Not Completed'}</p>
              </>
            )}
          </div>
          <div className='task-actions d-flex flex-column gap-2'>
            {status !== 'completed' && (
              <>
                {isEditing ? (
                  <button className='btn btn-primary' onClick={handleSave}>Save</button>
                ) : (
                  <button className='btn btn-secondary' onClick={() => setIsEditing(true)}>Edit</button>
                )}
                <button className='btn btn-success' onClick={() => completeTask(id)}>Complete</button>
              </>
            )}
            <button className='btn btn-danger' onClick={() => deleteTask(id)}>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TaskItem;
