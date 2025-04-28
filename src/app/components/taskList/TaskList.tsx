import React from 'react'
import styles from './TaskList.module.css'
import TaskItem from '../taskItem/TaskItem'


interface TaskListProps {
  imcompletedTasks: number;
  editTask: (id: number, completed: boolean) => void;
  deleteTask: (id: number) => void;
  incompletedTasks: number;
  taskList: {
    id: number;
    title: string;
    completed: boolean;
  }[];
}
const TaskList = ({ incompletedTasks, editTask, deleteTask, taskList}: TaskListProps) => {

  const taskListMap = taskList.map((task ) => (
    <TaskItem 
    key={task.id}
    id={task.id}
    title={task.title}
    completed={task.completed}
    editTask={editTask}
    deleteTask={deleteTask}
    task={task}
    />
  ))

  if(taskList && taskList.length > 0) {
    return (
      <div className='box mx-10'>
        {incompletedTasks > 0 && (
          <h2 className={`${styles.title}`}>
            Il te reste encore <span className='important'>{incompletedTasks}</span> taches a accomplir
          </h2>
        )}

        {incompletedTasks === 0 && (
          <h2 className={`${styles.title}`}>
          👍Genial, Tu as accompli toutes tes taches !
        </h2>
        )}
          {taskList && taskList.length > 0 && (
            <ul className={`${styles.container}`}>
              {taskListMap}
            </ul>
          )}
      </div>
    ) 
  }
  return (
    <div className='box mx-10' >
    <h2 className={`${styles.emptyState}`}>
      😊Salut, Tu n&apos;as rien a faire ! Profite de ton temps libre !
    </h2>
  </div>
  )
}

export default TaskList