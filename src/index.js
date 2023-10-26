import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";
// const router = createBrowserRouter([
//   {
//     Path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         Path:"about",
//         element:<About/>
//       },
//       {
//         Path:"contact",
//         element:<Contact/>
//       },
//     ]
//   }
// ])

// or

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* for taking dynamic value from URL */}
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
       path='github' element={<Github/>}/>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <App /> 
    </BrowserRouter> 
    */}
    {/* OR */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
