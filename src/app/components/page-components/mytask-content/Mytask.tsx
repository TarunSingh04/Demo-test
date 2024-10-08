import React, { useState } from 'react';
import styles from './styles.module.scss';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';


const Mytask_data = [
  {
    taskId:0,
    taskType:"critical",
    taskName: "Way forward to critical3",
    dueDate: "29/10/2024",
    tags: ["Environmental","Social"],
    priority: "top",
    taskStatus: "completed",
  },
  {
    taskId:1,
    taskType:"critical",
    taskName: "Way forward to critical2",
    dueDate: "29/10/2024",
    tags: ["Environmental","Social"],
    priority: "top",
    taskStatus: "pending"
  },
  {
    taskId:2,
    taskType:"critical",
    taskName: "Way forward to critical1",
    dueDate: "29/10/2024",
    tags: ["Environmental","Social"],
    priority: "top",
    taskStatus: "todo"
  },
  {
    taskId:3,
    taskType:"key",
    taskName: "Way forward to key3",
    dueDate: "29/10/2024",
    tags: ["Environmental","Social"],
    priority: "top",
    taskStatus: "completed"
  },
  {
    taskId:4,
    taskType:"key",
    taskName: "Way forward to key2",
    dueDate: "29/10/2024",
    tags: ["Environmental","Social"],
    priority: "top",
    taskStatus: "pending"
  },
  {
    taskId:5,
    taskType:"key",
    taskName: "Way forward to key1",
    dueDate: "29/10/2024",
    tags: ["Environmental","Social"],
    priority: "top",
    taskStatus: "todo"
  },
  {
    taskId:6,
    taskType:"supporting",
    taskName: "Way forward to supporting3",
    dueDate: "29/10/2024",
    tags: ["Environmental","Social"],
    priority: "top",
    taskStatus: "completed"
  },
  {
    taskId:7,
    taskType:"supporting",
    taskName: "Way forward to supporting2",
    dueDate: "29/10/2024",
    tags: ["Environmental","Social"],
    priority: "top",
    taskStatus: "pending"
  },
  {
    taskId:8,
    taskType:"supporting",
    taskName: "Way forward to supporting1",
    dueDate: "29/10/2024",
    tags: ["Environmental","Social"],
    priority: "top",
    taskStatus: "todo"
  },
]

const Mytask = () => {
  const [taskType, settaskType] = useState<string>("critical");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<any>({
    taskType: "critical",
    taskName: "",
    dueDate: "",
    tags: [],
    priority: "top",
    taskStatus: "todo",
  });
  const [tasks, setTasks] = useState<any>(Mytask_data);
  const [showStatusPopup, setShowStatusPopup] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const onChangeTaskType = (e: any) => {
    settaskType(e.target.value);
  };

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleAddTask = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e: any) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handlePriorityChange = (e: any) => {
    setNewTask({ ...newTask, priority: e.target.value });
  };

  const handleTagChange = (e: any) => {
    const { value } = e.target;
    const tags = [...newTask.tags];

    if (tags.includes(value)) {
      const index = tags.indexOf(value);
      tags.splice(index, 1);
    } else if (tags.length < 3) {
      tags.push(value);
    }

    setNewTask({ ...newTask, tags });
  };

  const handleSaveTask = () => {
    setTasks([...tasks, newTask]);
    setShowPopup(false);
  };

  const handleTaskStatusChange = (newStatus: string) => {
    if (selectedTaskId !== null) {
      const updatedTasks = tasks.map((task: any) => {
        if (task.taskId === selectedTaskId) {
          return { ...task, taskStatus: newStatus };
        }
        return task;
      });
      setTasks(updatedTasks);
      setShowStatusPopup(false); // Close the popup
      setSelectedTaskId(null); // Reset selected task
    }
  };

  const handleStatusButtonClick = (taskId: number) => {
    setSelectedTaskId(taskId); // Set the selected task's ID
    setShowStatusPopup(true); // Open status popup
  };

  // Filter tasks only for display purposes
  const filteredTasks = tasks.filter((task: any) =>
    task.taskType === taskType &&
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTagColor =(tags:any)=>{
    if(tags==="Environmental"){
      return "#34d399"
    }
    else if(tags==="Social"){
      return "#12467b"
    }
    else{
      return "#f59e0b"
    }
  }

  const getPriorityCol = (priority:any)=>{
    if(priority==="top"){
      return "#c93131"
    }
    else if(priority==="medium"){
      return "rgb(235 198 3)"
    }
    else{
      return "#3c413c"
    }
  }

  return (
    <div className={styles.myTask}>
      <h2>My Tasks</h2>
      <div className={styles.taskcontainer}>
        <div className={styles.searchcontainerHeader}>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className={styles.taskfilters}>
            <p onClick={handleAddTask}>Add task</p>
            <select onChange={onChangeTaskType}>
              <option value="critical">Critical Task</option>
              <option value="key">Key Task</option>
              <option value="supporting">Supporting Task</option>
            </select>
          </div>
        </div>

        {/* Task Lists (Todo, Pending, Completed) */}
        {["todo", "pending", "completed"].map((status) => (
          <div className={styles.todoCont} key={status}>
            <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
            <div className={styles.todoSubCont}>
              {filteredTasks.map((items: any) => (
                items.taskStatus === status && (
                  <div key={items.taskId} className={styles.todoTaskscont}>
                    <div className={styles.leftItems}>
                      <h4>{items.taskName}</h4>
                      <p>Due date: {items.dueDate}</p>
                    </div>
                    <div className={styles.rightItems}>
                      <div className={styles.rightsubCont}>
                        <div className={styles.tags}>
                          {items.tags.map((tag: string, tagIndex: number) => (
                            <div className={styles.tagItems} key={tagIndex} style={{background:getTagColor(tag),color:"#fff"}}>{tag}</div>
                          ))}
                        </div>
                        <div className={styles.priorityStatus}>Priority: <span style={{color:getPriorityCol(items.priority)}}>{items.priority}</span></div>
                      </div>
                      <button
                        className={styles.statusBtn}
                        onClick={() => handleStatusButtonClick(items.taskId)}
                      >
                        <BsThreeDotsVertical />
                      </button>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Popup for adding a new task */}
      {showPopup && (
        <div className={styles.popup1}>
          <div className={styles.popupContent1}>
            <h3>Add New Task</h3>
            <input
              type="text"
              placeholder="Task Name"
              name="taskName"
              value={newTask.taskName}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="dueDate"
              value={newTask.dueDate}
              onChange={handleInputChange}
            />
            <select name="taskType" value={newTask.taskType} onChange={handleInputChange}>
              <option value="critical">Critical Task</option>
              <option value="key">Key Task</option>
              <option value="supporting">Supporting Task</option>
            </select>
            <select name="priority" value={newTask.priority} onChange={handlePriorityChange}>
              <option value="top">Top Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>

            <h4>Select Tags (Max 3)</h4>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Environmental"
                  checked={newTask.tags.includes("Environmental")}
                  onChange={handleTagChange}
                />
                <p>Environmental</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Social"
                  checked={newTask.tags.includes("Social")}
                  onChange={handleTagChange}
                />
                <p>Social</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Governance"
                  checked={newTask.tags.includes("Governance")}
                  onChange={handleTagChange}
                />
                <p>Governance</p>
              </label>
            </div>

            <button onClick={handleSaveTask} className={styles.saveTask}>Save Task</button>
            <button onClick={handleClosePopup} className={styles.cancelTask}>Cancel</button>
          </div>
        </div>
      )}

      {/* Popup for changing task status */}
      {showStatusPopup && selectedTaskId !== null && (
        <div className={styles.statusPopup}>
          <div className={styles.popupContent}>
            <h3>Change Task Status</h3>
            <button onClick={() => handleTaskStatusChange("todo")}>
              Todo
            </button>
            <button onClick={() => handleTaskStatusChange("pending")}>
              Pending
            </button>
            <button onClick={() => handleTaskStatusChange("completed")} style={{ background: "rgb(19 207 1)" }}>
              Completed
            </button>
            <div className={styles.navbtns}>
            <p onClick={() => setShowStatusPopup(false)} className={styles.cancelnav}>Cancel</p>
            <p onClick={() => setShowStatusPopup(false)} className={styles.delete}>Delete</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mytask;
