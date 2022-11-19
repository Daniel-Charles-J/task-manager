// When clicking the view button this component will render, the data will get from Task.js.
import Model from "./Model";
import "../Styles/taskItem.css"
function TaskItem({onClose, open, title, description}){
    return(
        <div>
            <Model modalLable="Add Task" onClose={onClose} open={open}>
                <div className="taskItem">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
            </Model>
        </div>   
    )
}
export default TaskItem;