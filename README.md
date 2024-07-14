# Todo App

A simple Todo application built with React, allowing users to manage tasks with features like adding, editing, deleting, and prioritizing todos. It also supports toggling between light and dark themes and features a visual indicator for due dates.

## Features

- **Add Todos**: Create new tasks with optional due dates.
- **Edit Todos**: Modify existing tasks.
- **Delete Todos**: Remove tasks from the list.
- **Complete Todos**: Mark tasks as completed or incomplete.
- **Due Date Indicator**: Color-coded icon for due dates.
- **Prioritize Todos**: Set task priority (low, medium, high).
- **Theme Toggle**: Switch between light and dark modes.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/MarekJuricko/Todo_App.git
    cd todo-app
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the Development Server**

    ```bash
    npm start
    ```

## Components

- **App**: Manages state, theme, and fetches todos from the API.
- **TodoList**: Renders the list of todo items and formats due dates.
- **TodoItem**: Displays a single todo item with edit, delete, and priority features.
- **AddTodo**: Provides a form to add new todo items with optional due dates.

## Styling

- Basic CSS for layout and theme management.
- Responsive design with media queries.

## API

Interacts with a mock API at: [MockAPI](https://66912fd526c2a69f6e8ed197.mockapi.io/todos).
