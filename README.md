---

# Task Tracker CLI

## Overview

Welcome to the Task Tracker CLI! This project is a simple, yet powerful command-line tool designed to help you manage your tasks efficiently. Whether you’re juggling multiple projects or just need to keep track of your daily to-dos, this CLI app has got you covered. It’s built entirely with Node.js, using native modules, so you can focus on managing tasks without worrying about unnecessary dependencies.

I got the project idea from [roadmap](roadmap.sh) and you can find the project [here](https://roadmap.sh/projects/task-tracker)

## Features

- **Add New Tasks**: Quickly add tasks with a short description.
- **Update Tasks**: Modify the description of an existing task when things change.
- **Delete Tasks**: Clean up your task list by removing tasks that are no longer relevant.
- **Track Progress**: Mark tasks as "in-progress" or "done" to stay on top of your workflow.
- **List Tasks**: View all tasks or filter by status (e.g., see what’s done or what’s still pending).

## Getting Started

### Prerequisites

Before you start, make sure you have Node.js installed on your machine. If you don’t have it yet, you can download it from [here](https://nodejs.org/).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/task-tracker-cli.git
   cd task-tracker-cli
   ```

2. **Set Up the Project**:
   There’s no need to install any additional packages. Everything is built using Node.js’s native modules, so you can dive right in!

3. **Automatic File Setup**:
   The application will automatically create a `tasks.json` file in your project directory if it doesn’t already exist. This file is where all your tasks will be stored.

### Usage

This CLI is easy to use and works with simple commands from your terminal.

#### Adding a Task

Want to add a new task? Just run:

```bash
node index.js add "Your task description"
```

Example:

```bash
node index.js add "Buy groceries"
```

You’ll see a confirmation message, and your task will be added to the list.

#### Listing All Tasks

To see all your tasks at once, use:

```bash
node index.js list
```

You’ll get a list of all tasks, showing their ID, description, status, and timestamps.

#### Listing Tasks by Status

You can also filter tasks by their status:

- **To see all completed tasks**:
  ```bash
  node index.js list done
  ```

- **To see tasks that are in progress**:
  ```bash
  node index.js list in-progress
  ```

- **To see tasks that are yet to be started**:
  ```bash
  node index.js list todo
  ```

#### Updating a Task

Need to change a task’s description? No problem:

```bash
node index.js update <task-id> "New task description"
```

Example:

```bash
node index.js update 1 "Buy groceries and cook dinner"
```

Your task will be updated with the new description.

#### Deleting a Task

To remove a task that you’ve completed or no longer need:

```bash
node index.js delete <task-id>
```

Example:

```bash
node index.js delete 1
```

The task will be removed from your list, and you’ll get a confirmation message.

#### Marking a Task as In Progress

To mark a task that you’re currently working on:

```bash
node index.js mark-in-progress <task-id>
```

Example:

```bash
node index.js mark-in-progress 2
```

The task’s status will be updated to "in-progress".

#### Marking a Task as Done

Finally, to mark a task as completed:

```bash
node index.js mark-done <task-id>
```

Example:

```bash
node index.js mark-done 2
```

The task’s status will be updated to "done", and you’ll see a confirmation.

### Task Structure

Tasks are stored in a `tasks.json` file in the following format:

```json
{
    "id": 1,
    "description": "Buy groceries",
    "status": "todo",
    "createdAt": "2024-09-01T12:00:00.000Z",
    "updatedAt": "2024-09-01T12:00:00.000Z"
}
```

Each task has a unique `id`, a `description`, a `status` (which can be `todo`, `in-progress`, or `done`), and timestamps for when the task was created and last updated.

### Error Handling

The CLI is designed to be user-friendly. If you try to update or delete a task that doesn’t exist, it will let you know with a clear message. The same goes for any commands that aren’t recognized.

### Contributing

We welcome contributions! If you’d like to improve the Task Tracker CLI, feel free to fork the repository, make your changes, and submit a pull request. Whether it’s fixing a bug, adding a new feature, or improving documentation, your contributions are appreciated!

### License

This project is open-source and is available under the [MIT License](LICENSE).

---
