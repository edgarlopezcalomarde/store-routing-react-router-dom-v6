import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { getAllProducts, getProductById } from "./services/products";
import ProductPreviewPage from "./pages/ProductPreviewPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RequireAuth from "./components/RequireAuth";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
          loader: async () => {
            return await getAllProducts();
          },
        },
        {
          path: "/products/:id",
          element: <ProductPreviewPage />,
          loader: async ({ params }) => {
            return await getProductById(params.id ?? "");
          },
        },
        {
          path: "/profile",
          element: (
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
