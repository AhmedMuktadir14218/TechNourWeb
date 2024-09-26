import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Component/NotFound";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      
      path:'/',
      element:<Home></Home>
    }
    
    ,
    {
      
      path:'*',
      element:<NotFound></NotFound>
    },
  
  ]}
  ]);