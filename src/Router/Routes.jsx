import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import AddToFindRoommates from "../Components/AddToFindRoommates";
import BrowseListings from "../Components/BrowseListings";
import MyListings from "../Components/MyListings";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../Components/LogIn";
import SignUp from "../Components/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import UpdateListings from "../Components/UpdateListings";
import ListingDetails from "../Components/ListingDetails";
import ErrorPage from "../Components/ErrorPage";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import Overview from "../Components/Overview";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import Support from "../Components/Support";
import Profile from "../Components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path:"/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path:"/support",
        element: <Support></Support>
      },
      {
        path: "/browseListings",
        loader: () => fetch("https://a-10-server-side-phi.vercel.app/listings"),
        element: (
          <PrivateRoute>
            <BrowseListings></BrowseListings>
          </PrivateRoute>
        ),
      },
      {
        path: "/listingDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://a-10-server-side-phi.vercel.app/listings/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ListingDetails></ListingDetails>
          </PrivateRoute>
        ),
      },
      
      
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Overview></Overview>
      },
     {
        path: "/dashboard/addToFindRoommates",
        element: (
          <PrivateRoute>
            <AddToFindRoommates></AddToFindRoommates>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myListings",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/updateListings/:id",
        loader: ({ params }) =>
          fetch(
            `https://a-10-server-side-phi.vercel.app/listings/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateListings></UpdateListings>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>
      }
    ]
  },
]);
