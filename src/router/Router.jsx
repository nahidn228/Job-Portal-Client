import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddJob from "../pages/AddJob";
import AllJobs from "../pages/AllJobs";
import Home from "../pages/Home";
import JobApplyForm from "../pages/JobApplyForm";
import JobDetails from "../pages/JobDetails";
import MyApplications from "../pages/MyApplications";
import MyPostedJobs from "../pages/MyPostedJobs";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import ViewApplications from "../pages/ViewApplications";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-portal-server-two.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/find-job",
        element: <AllJobs></AllJobs>,
        loader: () => fetch("https://job-portal-server-two.vercel.app/jobs"),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApplyForm></JobApplyForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-portal-server-two.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJob",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications></ViewApplications>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-two.vercel.app/job-applications/job/${params.job_id}`
          ),
      },
    ],
  },
]);

export default router;
