import React, { lazy } from "react";
import { createBrowserRouter, } from "react-router-dom";
import RootLayout from "../layouts/root_layout";
import ErrorPage from "../components/error_page";

const Home = lazy(() => import("../components/home"));
const Login = lazy(() => import("../components/auth/login"));
const Register = lazy(() => import("../components/auth/register"));
const UsersList = lazy(() => import("../components/users_list"))

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                index: true,
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login /> ,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'users_list',
                element: <UsersList />
            },
            // {
            //     path: 'news',
            //     element: <News />,
            //     loader: (async ({ request }) => {
            //                 const res = await axios.get(NEWSAPILINK);
            //                 const newsdata = await res?.data?.articles;
            //                 return newsdata;
            //             })
            // },
           
        ]
    },
]);