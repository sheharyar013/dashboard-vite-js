import {
  lazy,
  // Suspense
} from "react";
import {
  // Outlet,
  Navigate,
  useRoutes,
} from "react-router-dom";
export const LoginPage = lazy(() => import("../../src/pages/login"));
export const Page404 = lazy(() => import("../../src/pages/page-not-found"));

// import DashboardLayout from "src/layouts/dashboard";

// export const IndexPage = lazy(() => import("src/pages/app"));
// export const BlogPage = lazy(() => import("src/pages/blog"));
// export const UserPage = lazy(() => import("src/pages/user"));
// export const ProductsPage = lazy(() => import("src/pages/products"));

export default function Router() {
  const routes = useRoutes([
    // {
    //   element: (
    //     <DashboardLayout>
    //       <Suspense>
    //         <Outlet />
    //       </Suspense>
    //     </DashboardLayout>
    //   ),
    //   children: [
    //     { element: <IndexPage />, index: true },
    //     { path: "network", element: <UserPage /> },
    //     { path: "vault", element: <ProductsPage /> },
    //     { path: "admin", element: <BlogPage /> },
    //   ],
    // },
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
