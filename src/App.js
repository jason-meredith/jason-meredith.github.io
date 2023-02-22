import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ResumePage from './resume/ResumePage';

import Introduction from './Introduction';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/resume",
      element: <ResumePage />
    },
    {
      path: "/",
      element: <Introduction />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
