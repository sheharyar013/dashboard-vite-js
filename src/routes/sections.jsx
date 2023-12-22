import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
export const LoginPage = lazy(() => import("../../src/pages/login"));
export const Page404 = lazy(() => import("../../src/pages/page-not-found"));
export const IndexPage = lazy(() => import("../../src/pages/app"));

// export const BlogPage = lazy(() => import("src/pages/blog"));
// export const UserPage = lazy(() => import("src/pages/user"));

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
        { path: "/dashboard", element: <IndexPage />, index: true },
        // { path: "network", element: <UserPage /> },
        // { path: "admin", element: <BlogPage /> },
      ],
    },
    {
      path: "",
      element: <LoginPage />,
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
