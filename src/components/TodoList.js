import React, { useState, useEffect } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      date: new Date().toISOString()
    };

    setIsAdding(true);
    setTimeout(() => {
      setTasks([...tasks, task]);
      setNewTask('');
      setIsAdding(false);
    }, 300);
  };

  const removeTask = (taskId) => {
    const taskElement = document.getElementById(`task-${taskId}`);
    if (taskElement) {
      taskElement.classList.add('removing');
      setTimeout(() => {
        setTasks(tasks.filter(task => task.id !== taskId));
      }, 300);
    }
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    }
    return a.text.localeCompare(b.text);
  });

  return (
    <div className="todo-list">
      <div className="todo-header">
        <h1>ToDo List</h1>
        <p className="task-count">
          {tasks.filter(task => !task.completed).length} tasks remaining
        </p>
      </div>
      
      <form onSubmit={addTask} className={`task-form ${isAdding ? 'adding' : ''}`}>
        <div className="input-wrapper">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to be done?"
            className="task-input"
          />
          <button type="submit" className="add-button">
            <span className="plus-icon">+</span>
          </button>
        </div>
      </form>

      <div className="controls">
        <div className="filter-group">
          <label>Filter:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Tasks</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="sort-group">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="date">Date</option>
            <option value="text">Name</option>
          </select>
        </div>
      </div>

      <ul className="tasks">
        {sortedTasks.map(task => (
          <li 
            key={task.id} 
            id={`task-${task.id}`}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <div className="task-content">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span className="checkmark"></span>
              </label>
              <span className="task-text">{task.text}</span>
            </div>
            <div className="task-actions">
              <span className="task-date">
                {new Date(task.date).toLocaleDateString()}
              </span>
              <button
                onClick={() => removeTask(task.id)}
                className="delete-button"
                title="Delete task"
              >
                ×
              </button>
            </div>
          </li>
        ))}
        {sortedTasks.length === 0 && (
          <li className="empty-state">
            <p>No tasks found. Add one above!</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList; 