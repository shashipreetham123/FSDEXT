import Navbar from "./components/Navbar"

import { Routes, Route } from 'react-router-dom'
import TaskView from "./pages/TaskView"

import { Plus } from "lucide-react";
import { useState } from "react";

const initTasks = [
    {
        id: 1,
        name: "Complete Bootstrap Tutorial",
        created: new Date("2026-11-10"),
        deadline: new Date("2026-11-13"),
        completed: null,
        status: "pending"
    },
    {
        id: 2,
        name: "Finish React Portfolio",
        created: new Date("2026-11-08"),
        deadline: new Date("2026-11-11"),
        completed: new Date("2026-11-10"),
        status: "completed"
    },
    {
        id: 3,
        name: "Study Operating Systems",
        created: new Date("2026-11-09"),
        deadline: new Date("2026-11-12"),
        completed: null,
        status: "pending"
    },
    {
        id: 4,
        name: "Complete LSTM Lab",
        created: new Date("2026-11-05"),
        deadline: new Date("2026-11-09"),
        completed: new Date("2026-11-08"),
        status: "completed"
    },
    {
        id: 5,
        name: "Build Weather Application",
        created: new Date("2026-11-07"),
        deadline: new Date("2026-11-15"),
        completed: null,
        status: "pending"
    },
    {
        id: 6,
        name: "Submit OS Assignment",
        created: new Date("2026-11-01"),
        deadline: new Date("2026-11-05"),
        completed: null,
        status: "failed"
    },
    {
        id: 7,
        name: "Practice JavaScript Array Methods",
        created: new Date("2026-11-10"),
        deadline: new Date("2026-11-14"),
        completed: new Date("2026-11-11"),
        status: "completed"
    },
    {
        id: 8,
        name: "Revise Machine Learning",
        created: new Date("2026-11-11"),
        deadline: new Date("2026-11-16"),
        completed: null,
        status: "pending"
    },
    {
        id: 9,
        name: "Complete MongoDB Queries",
        created: new Date("2026-11-06"),
        deadline: new Date("2026-11-10"),
        completed: null,
        status: "failed"
    },
    {
        id: 10,
        name: "Prepare Project Documentation",
        created: new Date("2026-11-10"),
        deadline: new Date("2026-11-18"),
        completed: null,
        status: "pending"
    }
];

function App() {

    const [tasks, setTasks] = useState(initTasks)

    function handleCompleteTask(taskId) {
        setTasks(prevTasks => prevTasks.map(task => (task.id == taskId) ? { ...task, status: "completed", completed: new Date() } : task))
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<TaskView tasks={tasks} />}></Route>
                <Route path="/pending" element={<TaskView tasks={tasks.filter(task => task.status == "pending")} onComplete={handleCompleteTask}/>}></Route>
                <Route path="/failed" element={<TaskView tasks={tasks.filter(task => task.status == "failed")} />}></Route>
                <Route path="/completed" element={<TaskView tasks={tasks.filter(task => task.status == "completed")} />}></Route>
            </Routes>
            <button className="btn btn-primary floating-btn">
                <Plus size={25} />
            </button>
        </>
    )
}

export default App