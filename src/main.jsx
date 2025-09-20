import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import router from './Router/Router.jsx';
import SmoothScrollProvider from './Components/SmoothScrollBehebiure.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrollProvider>
      <RouterProvider router={router} />
    </SmoothScrollProvider>
  </StrictMode>,
)
