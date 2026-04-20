import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home/Home";
import RootLayouts from "../Layouts/RootLayouts";
import Adbout from "../Pages/About/Adbout";
import Skills from "../Pages/Skills/Skills";
import Project1 from "../Pages/Project/Project1";
import Project2 from "../Pages/Project/Project2";
import Project3 from "../Pages/Project/Project3";
import Project from "../Pages/Project/Project";
import Contact from "../Pages/Contact/Contact";
import Project4 from "../Pages/Project/Project4";


const router = createBrowserRouter([
  {
    path: "/",
    element : <RootLayouts/>,
    children:[
      {
        index:true , Component: Home
      },
      {
        path: 'about' , Component : Adbout
      },
      {
        path: 'skills' , Component : Skills
      },
      {
        path: "projects" , Component :Project

      },
     {
      path: 'project1' , Component:Project1
     },
     

     {
      path : 'project2', Component: Project2
     },
      
     {
      path : "project3" , Component : Project3
     },
     {
      path : 'contact' , Component : Contact
     },
     {
      path : "project4" ,Component: Project4
     }
    ]
  }
]);


export default router;