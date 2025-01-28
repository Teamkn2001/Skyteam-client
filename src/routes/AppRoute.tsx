import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
        { index: true, element: <Homepage /> }],
  },
]);

export default function AppRoute() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
