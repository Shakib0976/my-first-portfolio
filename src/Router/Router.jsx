import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home/Home";
import RootLayouts from "../Layouts/RootLayouts";
import Adbout from "../Pages/About/Adbout";
import Skills from "../Pages/Skills/Skills";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
      {
        index:true , Component: Home
      },
      {
        path: 'about' , Component : Adbout
      },
      {
        path: 'skills' , Component : Skills
      }
    ]
  }
]);


export default router;