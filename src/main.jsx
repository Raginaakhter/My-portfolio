import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './component/Root';
import Hero from './component/Hero';
import About from './component/About';
import Service from './Service';
import Education from './component/Education';
import Skills from './component/Skills';
import Resume from './component/Resume';
import Contact from './component/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/service",
        element: <Service></Service>
      },
      {
        path: "/education",
        element: <Education></Education>
      },
        {
        path: "/skills",
        element: <Skills></Skills>
      },
         {
    path: "/resume",
    element: <Resume />,
  },
    {
    path: "/contact",
    element:<Contact></Contact>,
  },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-blue-900 min-h-screen">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
)
