import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand">Task Manager</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pending">Pending</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/completed">Completed</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/failed">Failed</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar