import Appointment from "../../Pages/Appointment/Appointment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");


const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            }
        ]
    }
])

export default router;