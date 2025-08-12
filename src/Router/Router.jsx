import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home/Home";
import RootLayouts from "../Layouts/RootLayouts";
import Adbout from "../Pages/About/Adbout";


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
      }
    ]
  }
]);


export default router;