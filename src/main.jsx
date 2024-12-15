import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './components/Root';
import './index.css'
import Deshboard from './components/Deshboard';
import Statistics from './components/Statistics';
import Home from './components/Home';
import CategoryDetails from './components/categoryDetails';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
       path:'cate/:id',
       element:<CategoryDetails></CategoryDetails>,
       loader:() => fetch("/category.json")
      },
      {
          path:'Statistics',
          element:<Statistics></Statistics>
      },
      {
        path:'/deshboard',
        element:<Deshboard></Deshboard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
