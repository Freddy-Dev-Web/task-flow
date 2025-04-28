"use client"
import { useState } from 'react'
import styles from './TaskInput.module.css'

// Definir le type des props
interface TaskInputProps {
    addTask: (title: string) => void

}

export const TaskInput = ({ addTask}: TaskInputProps) => {
    const [taskTitle, setTaskTitle] = useState<string>("")
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value)
    }

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(taskTitle.trim()) {
            addTask(taskTitle)
            setTaskTitle("")
        }
    }

    return (
        <div className={`box mx-10 ${styles.element} `}> 
            <h2 className={`${styles.title}`}>🍬Ajoute ta prochaine tache</h2>
            <form
            onSubmit={handleAddTask} 
            className={`${styles.container}`}>
                <input 
                type="text"
                className={`${styles.input}`}
                placeholder="Indiquez un titre de tache explicite."
                onChange={handleInputChange}
                value={taskTitle}
                required
                />
            <button className="button-primary" type="submit">
                Ajouter
            </button>
            </form>
        </div>
    )
}