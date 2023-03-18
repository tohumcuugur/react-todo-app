import { createContext } from "react"
import { useState } from "react";
import axios from "axios";

const TaskContext = createContext()

export const Provider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const createTask = async (title, taskDescription) => {
        const response = await axios.post('http://localhost:3000/tasks', {
            title,
            taskDescription,
        });
        console.log(response);
        const createdTasks = [...tasks, response.data];
        setTasks(createdTasks);
    };
    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:3000/tasks');
        debugger;
        setTasks(response.data);
    };
    const deleteTaskById = async (id) => {
        await axios.delete(`http://localhost:3000/tasks/${id}`);
        const afterDeletingTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        setTasks(afterDeletingTasks);
    };
    const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
        await axios.put(`http://localhost:3000/tasks/${id}`, {
            title: updatedTitle,
            taskDescription: updatedTaskDesc,
        });
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { id, title: updatedTitle, taskDescription: updatedTaskDesc };
            }
            return task;
        });
        setTasks(updatedTasks);
    };
    const sharedValuesAndMethots = {
        tasks,
        createTask,
        fetchTasks,
        editTaskById,
        deleteTaskById
    }
    return (
        <TaskContext.Provider value={sharedValuesAndMethots}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;
