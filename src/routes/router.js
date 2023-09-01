import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Home from "../pages";
import React from "react";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import ProfileIndex from "../pages/profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />,  
            },
            {
                path: "profile",
                children: [
                    {
                        index: true,
                        element: <ProfileIndex />
                    }
                ]
            }
        ]

    },
    {
        path:"/",
        children: [
            {
                path: "/login",
                element:<Login/>,
            },
            {
                path: "/signup",
                element:<Signup/>,
            }
        ]
    }

])

export default router