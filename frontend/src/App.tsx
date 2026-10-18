import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Layout from "./Component/Layout/Layout";
import Projects from "./Component/Projects/Projects";
import About from "./Component/About/About";
import Donate from "./Component/Donate/Donate";

export default function App() {
  let rootes = createBrowserRouter([{
    path:"",element:<Layout/>,children:[{
      index:true , element:<Home/>
    },{
      path:"projects" ,element:<Projects/>
    },{
            path:"about" ,element:<About/>

    },{
                  path:"donate/:id" ,element:<Donate/>

    },{
                  path:"donate" ,element:<Donate/>

    }]
  }])
  return(
    <>
   <RouterProvider router={rootes}></RouterProvider>
    </>
  )
}