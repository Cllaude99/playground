import SomethingWentWrongPage from '@/components/status/error/SomethingWentWrongPage';
import { UnknownErrorBoundary } from '@/components/status/error/UnknownErrorBoundary';
import Home from '@/pages/home';
import SignUp from '@/pages/auth/sign_up/SignUp';
import SignUpComplete from '@/pages/auth/sign_up/SignUpComplete';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { APIErrorBoundary } from '@/components/status/error/APIErrorBoundary';
import { Suspense } from 'react';
import Loader from '@/components/status/loading/Loader';
import FloatingWidget from '@/pages/floating';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <UnknownErrorBoundary>
        <APIErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </APIErrorBoundary>
      </UnknownErrorBoundary>
    ),
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
      {
        path: 'floating',
        element: <FloatingWidget />,
      },
      {
        path: '*',
        element: <SomethingWentWrongPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
