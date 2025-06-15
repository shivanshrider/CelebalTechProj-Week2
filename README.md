# React Todo List Application

A feature-rich Todo List application built with React that includes task management, filtering, sorting, and local storage persistence.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Filter tasks (All/Active/Completed)
- Sort tasks by date or name
- Persistent storage using localStorage
- Responsive design
- Input validation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Testing Guide

1. **Adding Tasks**
   - Enter a task in the input field and click "Add Task" or press Enter
   - Try adding an empty task (should be prevented)
   - Add multiple tasks to test the list functionality

2. **Task Management**
   - Click the checkbox to mark a task as complete/incomplete
   - Click the "Delete" button to remove a task
   - Verify that completed tasks show with a strikethrough

3. **Filtering**
   - Use the filter dropdown to switch between:
     - All tasks
     - Active tasks (uncompleted)
     - Completed tasks
   - Verify that the correct tasks are displayed for each filter

4. **Sorting**
   - Use the sort dropdown to:
     - Sort by date (newest first)
     - Sort alphabetically by task name
   - Verify that tasks are properly sorted

5. **Persistence**
   - Add some tasks
   - Refresh the page
   - Verify that your tasks are still there
   - Close and reopen the browser to test localStorage persistence

## Implementation Details

- Uses React Hooks (useState, useEffect) for state management
- Implements localStorage for data persistence
- Features a clean, modern UI with responsive design
- Includes input validation to prevent empty tasks
- Uses CSS for styling with a focus on user experience

## Contributing

Feel free to submit issues and enhancement requests! 