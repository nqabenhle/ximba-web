import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import ConfirmEmail, { action as confirmEmailAction } from './routes/confirmEmail';
import ErrorPage from './errors/errorPage';
import Home from './routes/home';
import Login, { action as loginAction } from './routes/login';
import LoginUser from './routes/loginUser';
import NewPassword, { action as newPasswordAction } from './routes/newPassword';
import Root from './routes/root';
import Register, { action as registerAction } from './routes/register';
import ResetPassword, { action as resetPasswordAction } from './routes/resetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/login-user',
        element: <LoginUser />
      }
    ]
  }, 
  {
    path: '/confirm',
    element: <ConfirmEmail />,
    action: confirmEmailAction,
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction,
  },
  {
    path: '/new-password',
    element: <NewPassword />,
    action: newPasswordAction,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
  }, 
  {
    path: '/reset-password',
    element: <ResetPassword />,
    action: resetPasswordAction,
  },
])

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
