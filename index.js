const fs = require('fs');
const path = require('path');

//Defining the path to json file
const tasksFilePath = path.join(__dirname, 'tasks.json');

//creating the JSON file
function createTaskFile() {
    if (!fs.existsSync(tasksFilePath)) {
        fs.writeFileSync(tasksFilePath, '[]');
        console.log('tasks.json file created.');
    }
}

//Loading tasks from json file
function loadTasks() {
    try {
        const dataBuffer = fs.readFileSync(tasksFilePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

//saving tasks to json
function saveTasks(tasks) {
    const dataJSON = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(tasksFilePath, dataJSON);
}

//initialize the tasks.json file when script runs
createTaskFile();

//adding a new task
function addTask(task) {
    const tasks = loadTasks();
    const newTask = {
        id: tasks.length + 1,
        description: task,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
}

//listing all tasks
function listTasks() {
    const tasks = loadTasks();

    if (tasks.length ===0) {
        console.log('No tasks found.');
        return;
    }

    tasks.forEach((task) => {
        console.log(`ID: ${task.id}`);
        console.log(`Description: ${task.description}`);
        console.log(`Status: ${task.status}`);
        console.log(`Created At: ${task.createdAt}`);
        console.log(`Updated At: ${task.updatedAt}`);
        console.log(`----`);
    });
}

//listing all tasks by thier status
function listTasksByStatus(status) {
    const tasks = loadTasks();

    const filteredTasks = tasks.filter((task) => task.status === status);
    if (filteredTasks.length === 0) {
        console.log(`No tasks found with status: ${status}`);
        return;
    }

    filteredTasks.forEach((task) => {
        console.log(`ID: ${task.id}`);
        console.log(`Description: ${task.description}`);
        console.log(`Status: ${task.status}`);
        console.log(`Created At: ${task.createdAt}`);
        console.log(`Updated At: ${task.updatedAt}`);
        console.log(`---`)
    })
}

//updating task
function updateTask(id, newDescription) {
    const tasks = loadTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        console.log(`Task not found with ID: ${id}`);
        return;
    }

    tasks[taskIndex].description = newDescription;
    tasks[taskIndex].updatedAt = new Date().toISOString();

    saveTasks(tasks);
    console.log(`Task with ID: ${id} updated successfully.`);
}

//marking task as in-progress
function markTaskAsInProgress(id) {
    const tasks = loadTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        console.log(`Task not found with ID: ${id}`);
        return;
    }

    tasks[taskIndex].status = 'in-progress';
    tasks[taskIndex].updatedAt = new Date().toISOString();

    saveTasks(tasks);
    console.log(`Task with ID: ${id} masked as in-progress.`);
}

//marking task as done
function markTaskAsDone(id) {
    const tasks = loadTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        console.log(`Task not found with ID: ${id}`);
        return;
    }

    tasks[taskIndex].status = 'done';
    tasks[taskIndex].updatedAt = new Date().toISOString();

    saveTasks(tasks);
    console.log(`Task with ID: ${id} marked as done.`);
}

//deleting task
function deleteTask(id) {
    const tasks = loadTasks();
    const updatedTasks = tasks.filter((task) => task.id !== id);

    if (tasks.length === updatedTasks.length) {
        console.log(`Task with ID: ${id} not found.`);
        return;
    }

    saveTasks(updatedTasks);
    console.log(`Task with ID: ${id} deleted successfully.`);
}

//adding CLI functions and testing
const command = process.argv[2];
const args = process.argv.slice(3);

if (command === 'add') {
    const description = args.join(' ');
    addTask(description);
} else if(command === 'list') {
    if (args.length > 0) {
        listTasksByStatus(args[0]);
    } else {
        listTasks();
    }
} else if  (command === 'update') {
    const id = parseInt(args[0], 10);
    const newDescription = args.slice(1).join(' ');
    updateTask(id, newDescription);
} else if (command === 'mark-in-progress') {
    const id = parseInt(args[0], 10);
    markTaskAsInProgress(id);
} else if (command === 'mark-done') {
    const id = parseInt(args[0], 10);
    markTaskAsDone(id);
} else if (command === 'delete') {
    deleteTask(parseInt(args[0], 10));
} else {
    console.log('Invalid command');
}