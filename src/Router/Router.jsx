import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home/Home";
import RootLayouts from "../Layouts/RootLayouts";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
  },
]);


export default router;