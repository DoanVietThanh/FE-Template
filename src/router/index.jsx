import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import ErrorPage from '../pages/404Page';
import Loading from '../components/Loading';
import Home from '../pages/Home';

const RouterComponent = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Navigate to='home' /> },
    { path: '/home', element: <Home /> },
    { path: '*', element: <ErrorPage /> },
  ]);

  return <RouterProvider fallbackElement={<Loading />} router={router} />;
};

export default RouterComponent;
