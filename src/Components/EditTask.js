// When clicking the Edit button this component will render, the data will get from Task.js.
import Model from "./Model";
import "../Styles/editTask.css";
import {useState} from "react";
import {db} from "../FireBase/Firebase.js"
import { updateDoc, doc } from "firebase/firestore"
function EditTask({open, onClose, toEditTitle, toEditDescription, id}){
    const[title,setTitle] = useState(toEditTitle);
    const[description,setDescription] = useState(toEditDescription);

    async function handleUpdate(e){
        e.preventDefault();
        const taskDocReft = doc(db ,"tasks", id)
        try {
            await updateDoc(taskDocReft, {title, description});
        } catch (error) {
            alert(error);
        }
        onClose();
    }
    return(
        <Model modalLable="Edit Task" onClose={onClose} open={open}>
            <form className="addTask" name="addTask" onSubmit={handleUpdate}>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}  placeholder="Enter The task Title" name="title" value={title}></input>
                    <textarea type="text" onChange={(e) => setDescription(e.target.value)}  name="description" placeholder="Enter task Description" value={description}></textarea>
                    <button type="submit" >Edit</button>
                </form>
        </Model>
    )
}
export default EditTask;