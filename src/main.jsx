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

import ProtectedRoute from './Components/ProtectedRoute';
import ProtectedPage from './Components/ProtectedPage';
import { AuthProvider } from './Components/AuthContext';


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
       element: <ProtectedRoute><LandingPage></LandingPage></ProtectedRoute>
      },
      {path:'/joblistpage',
       element: <ProtectedRoute><JobListPage></JobListPage></ProtectedRoute>
      },
      {path:'/jobdetailspage',
       element: <ProtectedRoute><JobDetailPage></JobDetailPage></ProtectedRoute>
      },
      {path:'/applicationpage',
       element: <ProtectedRoute><ApplicationForm></ApplicationForm></ProtectedRoute>
      },
      {path:'/successpage',
       element: <SuccessPage></SuccessPage>
      },
      {path:'/protectedpage',
       element: <ProtectedRoute><ProtectedPage></ProtectedPage></ProtectedRoute>
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
     <AuthProvider> <RouterProvider router={router} />
     
     </AuthProvider>
   
  </React.StrictMode>,
)





