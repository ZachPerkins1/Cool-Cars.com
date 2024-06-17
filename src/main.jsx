import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage.jsx';
import InventoryPage from './InventoryPage.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import Wishlist from './Wishlist.jsx';
import AdminPage from './AdminPage.jsx';
import Landing from './Landing.jsx';
// import './index.css';
import LeaveReview from './LeaveReview.jsx';
import Register from './Register.jsx';
import { FavoritesProvider } from './contexts/FavoritesContext.jsx';
import Login from './Login.jsx';
import AddCar from './AddCar.jsx'
const sessionUser = JSON.parse(sessionStorage.getItem('userData')) || null;
const userId = sessionUser ? sessionUser.id : null;

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
  },
  {
    path: "addcar",
    element: <AddCar />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider userId={userId}>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>,
)
