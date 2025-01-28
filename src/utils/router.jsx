import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: async () => {
                    const serviceRes = await fetch("/service.json")
                    const serviceData = await serviceRes.json();

                    const feedBackRes = await fetch("/happyclients.json")
                    const feedBackData = await feedBackRes.json();

                    return {serviceData,feedBackData}
                }
            },
            {
                path:'/alltreatments',
                element:<AllTreatments></AllTreatments>,
                loader: () => fetch("/service.json")
            },
            {
                path:'/myappointments',
                element:<MyAppointments></MyAppointments>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader: async({params}) => {
                    const res = await fetch('/service.json')
                    const data = await res.json();

                    
                    const singleData = data.find(d=>d.id == params.id)
                    return singleData;
                }
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;