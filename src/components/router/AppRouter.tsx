import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SignUpPage from "../signUp/SignUpPage";
import GamePage from "../gamePage/GamePage";
import SignInPage from '../signIn/SignInPage';
import Modal from '../common/Modal';
import App from '../Modal/ModalUi';
import ModalUi from '../Modal/ModalUi';

function AppRouter() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <SignUpPage />
        },
        {
            path: '/sign-up',
            element: <SignUpPage />
        },
        {
            path: '/sign-in',
            element: <SignInPage />
        },
        {
            path: '/game-page',
            element: <GamePage />
        },
    ]);


    return (
        <RouterProvider router={router} />
    );
}

export default AppRouter;