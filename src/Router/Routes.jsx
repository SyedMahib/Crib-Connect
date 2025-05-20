import {
  createBrowserRouter
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);