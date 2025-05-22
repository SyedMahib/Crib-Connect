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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addToFindRoommates",
        element: (
          <PrivateRoute>
            <AddToFindRoommates></AddToFindRoommates>
          </PrivateRoute>
        )
      },
      {
        path: "/browseListings",
        loader: () => fetch("http://localhost:3000/listings"),
        element: (
          <PrivateRoute>
            <BrowseListings></BrowseListings>
          </PrivateRoute>
        )
      },
      {
        path: "/listinigDetails/:id",
        element: (
          <PrivateRoute>
            
          </PrivateRoute>
        )
      },
      {
        path: "/myListings",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
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
]);
