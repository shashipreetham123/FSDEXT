import TaskCard from "../components/TaskCard"
function TaskView( { tasks, onComplete } ) {
    return (
        <div className="container">
            <div className="row">
                {
                    tasks.map((task, i) => {
                        return (
                            <div key={i} className="col-md-4 col-sm-6">
                                <TaskCard task={task} onComplete={onComplete}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TaskView