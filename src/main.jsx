import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404.jsx';
import ProductsPage from './pages/products';
import ProfilePage from './pages/profile';
import DetailProductPage from './pages/detailProduct';
import { Provider } from 'react-redux';
import store from './redux/store';
import DarkModeContextProvider from './context/DarkMode';
import { TotalPriceProvider } from './context/TotalPriceContext';
import GetStartedPage from './pages/getStarted';
import CartPage from './pages/cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStartedPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
  {
    path: "/product/:id",
    element: <DetailProductPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
);
