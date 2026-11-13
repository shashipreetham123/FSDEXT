import { Pencil, Check, Trash2 } from "lucide-react";

function TaskCard( { task, onComplete }) {

    function handleComplete() {
        onComplete(task.id)
    }

    return (
        <div className="card m-2">
            <div className="card-body">
                <h3 className="card-title">{task.name}</h3>
                <p className="card-text">Created: {task.created.toLocaleDateString()}</p>
                <p className="card-text">Deadline: {task.deadline.toLocaleDateString()}</p>

                {
                    (task.status == "completed" && task.completed) &&
                    <p className="card-text">Completed: {task.completed.toLocaleDateString()}</p>
                }

                <button className="btn btn-primary m-2"><Pencil/> Edit</button>
                {
                    (task.status == "pending") && 
                    <button className="btn btn-success m-2" onClick={handleComplete}><Check/> Complete</button>

                }
                <button className="btn btn-danger m-2"><Trash2/> Delete</button>

            </div>
        </div>
    )
}

export default TaskCard