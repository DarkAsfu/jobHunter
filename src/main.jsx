import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Layout from './components/Layout/Layout';
import Statistic from './components/Statistics/Statistic';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/Jobdetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Layout></Layout>
      },
      {
        path: "/statistics",
        element: <Statistic></Statistic>
      },
      {
        path: "/appliedjob",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('/fetauresJobs.json')
        
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
