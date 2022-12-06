import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './App';

import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Background } from './components/background';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background/>
    <ToastContainer autoClose={2500} />
    <RouterProvider router={router}/>
  </React.StrictMode>
);