import "../Styles/task.css"
import {useState} from "react";
import TaskItem from "./TaskItem";
import EditTask from "./EditTask";


function Task(props){
    let {id,title,description,isCompleted} =props;
    //state 
    const [checked,setChecked] = useState(isCompleted);
    const [open,setOpen] = useState({edit:false, view:false});

    //delete method
    function handleDelete(){
        console.log("hello");
    }
    const handleChange = () =>{
        console.log("onchange");
    }

    const handleClose = () =>{
        setOpen({edit:false , view:false})
    }

    return(
        <div className={`task ${checked &&"task--borderColor"}`}>
            <div>
                <input id={`checkbox ${id}`} className="checkbox-custom" name="checkbox" checked={checked} onChange={handleChange} type="checkbox"></input>
                <label htmlFor={`checkbox ${id}`} onClick={() => setChecked(!checked)}></label>
            </div>
            <div>
              <h2>{title}</h2>
              {/* <h2>{id}</h2> */}
              <p>{description}</p>
            </div>
            <div className="task__buttons">
                <div className="task__deleteNedit">
                    <button className="task__editButton" onClick={()=>setOpen({...open, edit:true})}>Edit</button>
                    <button className="task__deleteButton" onClick={handleDelete}>Delete</button>
                </div>
                {/* while clicking without changing the other properties(edit) we changed only the view */}
                <button onClick={() => setOpen({...open,view:true})}>View</button>
            </div>
            {/* It will check from the button (view:true) then it will call the component. */}
           {open.view && <TaskItem onClose={handleClose} title={title} description={description} open ={open.view}></TaskItem>}

           {/* It will check from the button (view:true) then it will call the component. */}
           {open.edit && <EditTask onClose={handleClose} toEditTitle={title} toEditDescription={description} open ={open.edit} id={id}></EditTask>}

        </div>

    )
}
export default Task;