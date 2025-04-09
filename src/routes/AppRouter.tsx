import SomethingWentWrongPage from '@/components/error/SomethingWentWrongPage';
import { UnknownErrorBoundary } from '@/components/error/UnknownErrorBoundary';
import Home from '@/pages/Home';
import SignUp from '@/pages/SignUp';
import SignUpComplete from '@/pages/SignUpComplete';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { APIErrorBoundary } from '@/components/error/APIErrorBoundary';
import { Suspense } from 'react';
import Loader from '@/components/common/loading/Loader';

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
        path: '*',
        element: <SomethingWentWrongPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
