import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Introduction from './Introduction';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Introduction />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
