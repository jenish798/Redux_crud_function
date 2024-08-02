import React from "react";
import { Home, Update, Create } from "../pages";
import paths from "./path";

const routed = [
  { path: paths.HOME, element: <Home /> },
  { path: paths.CREATE, element: <Create /> },
  { path: paths.EDIT, element: <Update /> },
];

export default routed;