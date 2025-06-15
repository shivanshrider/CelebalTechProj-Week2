# ToDo List App

This is my ToDo List project for Week 2 of the CSI - Celebal Summer Internship 2025 at Celebal Technologies.

I made this app to practice React basics like components, state, and props. The app lets you add, complete, and delete tasks. You can also filter and sort your tasks, and everything stays saved even if you refresh the page (thanks to localStorage). I picked a purple theme because I wanted something that looks modern and stands out.

## How to Run

1. Clone this repo and open the folder in your code editor.
2. Run `npm install` to install everything you need.
3. Start the app with `npm start`.

## How to Use

- Type a task and click "Add Task" to add it.
- Click the checkbox to mark a task as done.
- Use the trash icon to delete a task.
- Use the dropdowns to filter or sort your tasks.
- Your tasks will stay even if you close or refresh the browser.

## What I Learned

- How to use React hooks like useState and useEffect.
- How to store data in localStorage.
- How to make a responsive UI with CSS.
- How to handle user input and validation.

I had a lot of fun building this and learned a lot about React. Thanks to my mentors for their help and feedback!

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Filter tasks (All/Active/Completed)
- Sort tasks by date or name
- Persistent storage using localStorage
- Responsive design
- Input validation

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