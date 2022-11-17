import "../Styles/taskManager.css"

import {useState} from "react";
import Task from "./Task";

function TaskManager(){
    let task = [{
        id :1001,
        isCompleted : false,
        title : "First task",
        description : "First Description"
    },
    {
        id :1002,
        isCompleted : false,
        title : "Second task",
        description : "First Description"
    },
    {
        id :1003,
        isCompleted : false,
        title : "third task",
        description : "First Description"
    }]
    const[tasks, setTasks] = useState(task);
    return(
        <div class="taskManager">
            <header>Task manager Component</header>
            <div className="taskManager__container">
                <button>Add</button>
                <div className="taskManager__tasks">
                    {tasks.map((x)=> 
                    <Task id={x.id} title={x.title} description={x.description} isCompleted={x.isCompleted} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default TaskManager;