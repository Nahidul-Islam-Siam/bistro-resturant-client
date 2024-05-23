import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<HelmetProvider>
    <div className='max-w-screen-xl mx-auto'> <RouterProvider router={router} /></div>
    </HelmetProvider>
    <Toaster />
</AuthProvider>
   
  </React.StrictMode>,
)
