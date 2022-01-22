import "./App.css";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointment from "./component/Appointment/Appointment/Appointment";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import Login from "./component/Login/Login/Login";
import Register from "./component/Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./component/Login/PrivateRoute/PrivateRoute";
import DashboardHome from "./component/Dashboard/DashboardHome/DashboardHome";
import AdminRoute from "./component/Login/AdminRoute/AdminRoute";
import Payment from "./component/Dashboard/Payment/Payment";
import MakeAdmin from "./component/Dashboard/MakeAdmin/MakeAdmin";
import AddDoctor from "./component/Dashboard/AddDoctor/AddDoctor";

function App() {
  return (
    <AuthProvider>
        <Router>
          <Routes>
            <Route path="/appointment" element={<PrivateRoute>
              <Appointment />
            </PrivateRoute>}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>

              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute>
                <AddDoctor></AddDoctor>
              </AdminRoute>}>
              </Route>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
  );
}

export default App;
