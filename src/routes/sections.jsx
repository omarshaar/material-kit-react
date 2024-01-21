import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const Orders = lazy(() => import('src/pages/orders'));
export const Order = lazy(() => import('src/pages/order'));
export const Wallet = lazy(() => import('src/pages/wallet'));
export const UserData = lazy(() => import('src/pages/user-data'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },

        { 
          element: (<><Outlet /></>),
          path: "orders",
          children: [{path: "", element: <Orders />}, {path: ":id", element: <Orders />}] 
        },
        {
          path: 'order/:id',
          element: <Order />,
        },
        {
          path: 'wallet',
          element: <Wallet />,
        },
        { path: 'blog', element: <BlogPage /> },
        { path: 'user/:id', element: <UserData /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
