import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx';
import InventoryPage from './InventoryPage.jsx';
import AboutUs from './AboutUs.jsx';
import Wishlist from './Wishlist.jsx';
import AdminPage from './AdminPage.jsx';
import Landing from './Landing.jsx';
import './index.css'
import LeaveReview from './LeaveReview.jsx';
import Register from './Register.jsx';
import { FavoritesProvider } from './contexts/FavoritesContext.jsx';
import Login from './Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "inventory",
    element: <InventoryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "aboutUs",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "wishlist",
    element: <Wishlist />,
    errorElement: <ErrorPage />,
  },
  {
    path: "leaveReview",
    element: <LeaveReview />,
    errorElement: <ErrorPage />,
  },
  {
    path: "adminpage",
    element: <AdminPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>,
)
