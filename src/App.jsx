import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import { DashboardLayout } from "./pages/DashboardLayout";
import Overview from "./components/UI/dashboard-components/Overview";
import DashboardAction from "./components/UI/dashboard-components/DashboardAction";
import Error from "./components/UI/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <Error message={"Something went wrong!"} code={500} />,
    children: [
      { index: true, element: <Home /> },
      { path: "products/:type", element: <Products /> },
      { path: "product/:id", element: <Product /> },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error message={"Something went wrong!"} code={500} />,
    children: [
      { index: true, element: <Overview /> },
      { path: ":action/:specify?", element: <DashboardAction /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
