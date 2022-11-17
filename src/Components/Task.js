function Task({id,title,description,isCompleted}){
    
    return(
        <div>
           <h2>{id}</h2>
           <h2>{title}</h2>
           <h2>{description}</h2>
           <h2>{isCompleted}</h2>
        </div>

    )
}
export default Task;