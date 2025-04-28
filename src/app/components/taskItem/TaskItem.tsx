import React from 'react'
import styles from './TaskItem.module.css'
import Link from 'next/link'
import { RiDeleteBin6Fill } from "react-icons/ri";



interface Task {
  completed: boolean
}


interface TaskItemProps {
  id: number;
  title: string;
  task: Task
  completed: boolean;
  editTask: (id: number, completed: boolean) => void;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ id, title, completed, task, editTask, deleteTask}: TaskItemProps) => {
  
  return (
    <Link 
    className={` ${styles.container} ${task?.completed ? styles.success : styles.default}`}
    href="" 
    onClick={() => editTask(id, !completed)}
    >
        <div className={styles.item}> 
            <div className={`${styles.id} ${task?.completed ? styles.idSuccess : styles.idDefault}`}>{id}</div>
            <div className={task?.completed ? styles.contentSuccess : styles.contentDefault}>
            {title}
            </div>
        </div>
        <button 
        onClick={(e) => {
          e.stopPropagation()
          deleteTask(id)
          e.preventDefault()

        }}
        className='button-primary'>
        <RiDeleteBin6Fill />
        </button>
    </Link>
  )
}

export default TaskItem