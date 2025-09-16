import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root';
import Hero from './component/Hero';
import { div, path } from 'framer-motion/client';
import About from './component/About';
import Service from './Service';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[
      {
        path:"/",
        element:<Hero></Hero>
      },
      {
        path:"/about",
        element:<About></About>
      },
      
 {
        path:"/service",
        element:<Service></Service>
      },
      

    ]
  },
]);


createRoot(document.getElementById('root')).render(
<div className='bg-blue-900'>
    <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
</div>
)
