import {useState} from "react";
import Model from "./Model";
import {db} from "../FireBase/Firebase.js"
import {collection, addDoc, timeStamp, Timestamp} from "firebase/firestore"
import "../Styles/addTask.css";

function AddTask({onClose, open}){
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await addDoc(collection(db, 'tasks'),{
                title:title,
                description: description,
                completed : false,
                created : Timestamp.now(),
            })
        }
        catch(e){
            alert(e);
        }
        onClose();
    }
    return(
        <div>
            <Model modalLable="Add Task" onClose={onClose} open={open}>
                <form className="addTask" name="addTask" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}  placeholder="Enter The task Title" name="title" value={title}></input>
                    <textarea type="text" onChange={(e) => setDescription(e.target.value)}  name="description" placeholder="Enter task Description" value={description}></textarea>
                    <button type="submit" >Submit</button>
                </form>
            </Model>
        </div>
    )
}
export default AddTask;