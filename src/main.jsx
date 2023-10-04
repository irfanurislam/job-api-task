import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Main from './Components/Main';
import App from './App';
import LandingPage from './Components/LandingPage';
import JobListPage from './Components/JobListPage';
import JobDetailPage from './Components/JobDetailPage';
import ApplicationForm from './Components/ApplicationForm';
import SuccessPage from './Components/SuccessPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <App></App>
      },
      {path:'/landingpage',
       element: <LandingPage></LandingPage>
      },
      {path:'/joblistpage',
       element: <JobListPage></JobListPage>
      },
      {path:'/jobdetailspage',
       element: <JobDetailPage></JobDetailPage>
      },
      {path:'/applicationpage',
       element: <ApplicationForm></ApplicationForm>
      },
      {path:'/successpage',
       element: <SuccessPage></SuccessPage>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
