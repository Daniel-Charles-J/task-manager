import "../Styles/task.css"
import {useState} from "react";


function Task(props){
    let {id,title,description,isCompleted} =props;
    const [checked,setChecked] = useState(isCompleted);
    const [open,setOpen] = useState({edit:false, view:false});
    function handleDelete(){
        console.log("hello");
    }

    return(
        <div className={`task ${checked &&"task--borderColor"}`}>
            <div>
                <input type="checkbox"></input>
                <label></label>
            </div>
            <div>
              <h2>{title}</h2>
              <h2>{id}</h2>
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
           
           

        </div>

    )
}
export default Task;