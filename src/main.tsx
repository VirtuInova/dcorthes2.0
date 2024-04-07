import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'virtual:fonts.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sobre from './Sobre/index.tsx'
import Products from './Products/index.tsx'
import Header from './Header/index.tsx'
import { Footer } from './Footer/index.tsx'
import Cortes from './NossosCortes/index.tsx'
import Nutricional from './Nutricional/index.tsx'
import Mapa from './Mapa/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/produtos",
    element: <Products />,
  },
  {
    path: "/cortes",
    element: <Cortes />,
  },
  {
    path: "/nutricional/:nome",
    element: <Nutricional />,
  },
  {
    path: "/mapa",
    element: <Mapa />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>,
)
