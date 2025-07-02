import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import SignUp from "./pages/Auth/signUp"
import Login from "./pages/auth/login"
import Dashboard from "./pages/Admin/Dashboard"
import UserDashboard from "./pages/User/Dashboard"
import ManageTask from "./pages/Admin/ManageTask"
import ManageUser from "./pages/Admin/ManageUsers"
import MyTasks from "./pages/User/MyTasks"
import CreateTask from "./pages/Admin/CreateTask"

import ViewTasksDetails from './pages/Admin/viewTasksDetails'
import PrivateRoute from "./routes/PrivateRoute"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>

          {/* Admin  Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/task" element={<ManageTask />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUser />} />
          </Route>

          {/* Users  Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route path="/user/task-details/:id" element={<ViewTasksDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App