import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import "./server";
import { Suspense } from "react";
import Courses from "./Pages/Courses";
import CourseDetails, { loader as cLoader } from "./Pages/CourseDetails";
import { Box, CircularProgress } from "@mui/material";
import UserWindow from "./Pages/UserWindow";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          }
        >
          <Layout />
        </Suspense>
      ),
      errorElement: <>{"somethomg Went wrong plz reload again"}</>,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<></>}>
              <Courses />
            </Suspense>
          ),
        },
        {
          path: "/search",
          element: (
            <Suspense fallback={<></>}>
              <Courses />
            </Suspense>
          ),
        },
        {
          path: "/course/:id",
          element: <CourseDetails />,
          loader: ({ params }) => cLoader(params.id),
        },
        {
          path: "/profile/:id",
          element: <UserWindow />,
          // loader: ({ params }) => cLoader(params.id),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
