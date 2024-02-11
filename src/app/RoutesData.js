import { lazy } from "react";

import { Routes } from "./routes.js";

const LogInPage = lazy(() => import("../pages/LogInPage/LogInPage.jsx"));
const SignInPage = lazy(() => import("../pages/SignInPage/SignInPage.jsx"));
const MainMenuPage = lazy(() => import("../pages/MeinMenuPage/MainMenuPage.jsx"));

export const RoutesData = [
  {
    path: Routes.SignIn,
    element: LogInPage,
  },
  {
    path: Routes.Login,
    element: SignInPage,
  },
  {
    path: Routes.MainMenu,
    element: MainMenuPage,
  },
];
