import React from 'react';
import styles from './styles.module.scss';
import { colors } from '@mui/joy';

const Tasks_Data = [
    {
        taskName:"Critical Task",
        taskTag:"Environmental",
        taskDescription:"Missing key certificates/ ISO / EPDS",
        color:"#34D399"
    },
    {
        taskName:"Key Task",
        taskTag:"Social",
        taskDescription:"Switching utilities providers",
        color:"#60A5FA"
    },
    {
        taskName:"Supporting Task",
        taskTag:"Governance",
        taskDescription:"Switching utilities providers",
        color:"#F59E0B"
    }
]

const Taskmanger = () => {
  return (
    <div className={styles.taskmanager}>
        <h4>My Tasks</h4>
        {
            Tasks_Data.map((items:any,index:any)=>{
                return(
                    <div className={styles.taskBox} key={index}> 
                       <div className={styles.taskHead}>
                       <p className={styles.taskHeader}>
                          {items.taskName}
                       </p>
                       </div>                   
                       <p className={styles.taskDesc}>{items.taskDescription}</p>
                       <div className={styles.tags}><span className={styles.todo}>To Do</span><span className={styles.progress}>Progress</span><span className={styles.done}>Done</span></div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Taskmanger