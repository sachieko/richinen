import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import Index from "./routes/Index.tsx";
import Menu from "./routes/Menu.tsx";
import Contact from "./routes/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        <p>Oh kuso an error happened whoop.</p>
      </div>
    ),
    children: [
      { index: true, element: <Index></Index>},
      {
        path: "/menu",
        element: <Menu />,
        errorElement: (
          <div>
            <p>Oh a smaller error happened, gomen.</p>
          </div>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: (
          <div>
            <p>Oh a smaller error happened, gomen.</p>
          </div>
        ),
      },

    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
