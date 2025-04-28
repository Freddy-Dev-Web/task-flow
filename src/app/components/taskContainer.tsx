"use client"

import { useState } from "react"
import Footer from "./footer/Footer"
import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import TaskList from "./taskList/TaskList"


interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export const TaskContainer = () => {

    const [tasksList, setTasksList] = useState<Task[]>([])


    const addTask = (title: string) => {
        const newTask = {
            id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1, // Generer un id unique
            title: title,
            completed: false,
        }
        setTasksList([...tasksList, newTask]) // Ajouter la nouvelle tache
    }

    const editTask = (id: number, completedValue: boolean) => {
        setTasksList(
            tasksList.map((task) =>
                task.id === id ? { ...task, completed: completedValue } : task
            )
        )
    }

    const deleteTask = (id: number) => {
        setTasksList(tasksList.filter((task) => task.id !== id))
    }

    const getTasksCounts = () => {
        const completedTasks = tasksList.filter((task) => task.completed).length
        const incompletedTasks = tasksList.length - completedTasks
        return {
            completedTasks,
            incompletedTasks,    
        }
    }

    const { completedTasks, incompletedTasks } = getTasksCounts()


    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} />
            <TaskList 
            incompletedTasks={incompletedTasks}
            deleteTask={deleteTask}
            editTask={editTask}
            taskList={tasksList}
            />
            <Footer completedTasks={completedTasks}/>
        </main>
    )
}