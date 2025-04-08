import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import SignUp from '@/pages/SignUp';
import SignUpComplete from '@/pages/SignUpComplete';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'sign_up',
        element: <SignUp />,
      },
      {
        path: 'sign_up/complete',
        element: <SignUpComplete />,
      },
    ],
  },
]);
