# React ToDo List Application

**Project Introduction**

This project is a modern, dynamic ToDo List web application built with React. It features a beautiful dark purple theme, task management (add, complete, delete), filtering, sorting, and persistent storage using localStorage. The UI is responsive and user-friendly, making it easy to manage your daily tasks.

> **Note:** This is the **Week 2 project** assigned by Celebal Technologies as part of the **CSI - Celebal Summer Internship 2025**.

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

1. **Add Tasks:**  
   Type a task and click "Add Task". Empty tasks are not allowed.

2. **Mark Complete:**  
   Click the checkbox to mark a task as complete/incomplete.

3. **Delete Tasks:**  
   Click the trash icon to remove a task.

4. **Filter/Sort:**  
   Use the dropdowns to filter (All/Active/Completed) and sort (Date/Name).

5. **Persistence:**  
   Refresh the page or close/reopen the browser. Your tasks should remain (localStorage).

6. **Responsive:**  
   Try resizing the browser or using on mobile—UI should adapt.

## Implementation Details

- Uses React Hooks (useState, useEffect) for state management
- Implements localStorage for data persistence
- Features a clean, modern UI with responsive design
- Includes input validation to prevent empty tasks
- Uses CSS for styling with a focus on user experience

## Contributing

Feel free to submit issues and enhancement requests! 