import {
  createBrowserRouter
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import AddToFindRoommates from "../Components/AddToFindRoommates";
import BrowseListings from "../Components/BrowseListings";
import MyListings from "../Components/MyListings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/addToFindRoommates",
            Component: AddToFindRoommates,
        },
        {
            path: "/browseListings",
            Component: BrowseListings,
        },
        {
            path: "/myListings",
            Component: MyListings,
        }
    ]
  },
]);