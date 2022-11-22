import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../coponent/PrivateRoute/AdminRoute";
import PrivateRoute from "../coponent/PrivateRoute/PrivateRoute";
import AddDoctor from "../DashboardLayout/AddDoctor/AddDoctor";
import AllUsers from "../DashboardLayout/Alluser/AllUsers";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import ManageDoctors from "../DashboardLayout/manageDoctor/ManageDoctors";
import Payment from "../DashboardLayout/Payment/Payment";
import Main from "../Layout/Main";
import MyAppointment from "../pages/Appointment/Myappointment/Myappointment";
import Appointment from "../pages/Appointment/pages/Appointment/Appointment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUP from "../pages/SingUP/SignUP";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'appointment',
                element: <Appointment />,
            },
            {
                path: '/signup',
                element: <SignUP />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/mangedoctors',
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`https://doctor-portal-server-side.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])