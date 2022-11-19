import "../Styles/taskManager.css"
import {db} from "../FireBase/Firebase.js"
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {useEffect, useState} from "react";
import Task from "./Task";
import AddTask from "./AddTask";

function TaskManager(){
    
    const[tasks, setTasks] = useState([]);
    const[openAddModel, setOpenAddModel] = useState(false);

    useEffect(() => {
        const taskColRef = query(
          collection(db, "tasks"),
          orderBy("created", "desc")
        );
        console.log(taskColRef);
        onSnapshot(taskColRef, (snapshot) => {
          console.log(snapshot.docs);
          setTasks(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
      }, []);
    
    return(
        <div className="taskManager">
            <header>Task manager Component</header>
            <div className="taskManager__container">
                <button onClick={() => setOpenAddModel(true)}>Add Task+</button>
                <div className="taskManager__tasks">
                    {tasks.map((x)=> 
                    <Task key={x.id} id={x.id} title={x.data.title} description={x.data.description} isCompleted={x.data.isCompleted} />
                    )}
                </div>
            </div>
            {openAddModel && <AddTask onClose={() => setOpenAddModel(false)} open={openAddModel}/>}
        </div>
    )
}
export default TaskManager;