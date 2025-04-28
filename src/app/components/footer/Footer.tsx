import React from 'react'
import styles from './Footer.module.css'



interface footerProps {
  completedTasks: number;
}
const Footer = ( { completedTasks }: footerProps) => {
  if(completedTasks) {
    return (
      <code className={styles.footer}>
          Avec TaskFlow tu as elimine {completedTasks} tache
          {completedTasks > 1 ? "s" : ""} !
      </code>
    )
  }
  return null;
}
export default Footer