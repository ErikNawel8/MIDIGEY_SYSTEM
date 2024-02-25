import { createBrowserRouter } from "react-router-dom";
import { Home, Materiales, Empleados } from "../views";
import Login from "../page/Login";
import ErrorPages from "../page/ErrorPages";
import RequireLogin from "../utils/require-login";
import ProtectedRoute from "./protected-route/protected-route";
import { Toaster } from "react-hot-toast";
import { Proveedores } from "../views/proveedores";

export const createRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <RequireLogin />
          <Toaster position="top-center" />
        </>
      ),
      errorElement: <ErrorPages />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        //
        {
          path: "/materiales-lista",
          element: (
            <ProtectedRoute
              roles={[
                "Administrador De Usuario",
                "Administrador",
                "Administrador de centro",
              ]}
            >
              <Materiales />
            </ProtectedRoute>
          ),
        },
        //
        {
          path: "/proveedores",
          element: (
            <ProtectedRoute roles={["Administrador", "Asistente"]}>
              <Proveedores />
            </ProtectedRoute>
          ),
        },
        //
        {
          path: "/empleados",
          element: (
            <ProtectedRoute
              roles={[
                "Administrador De Usuario",
                "Administrador",
                "Administrador de centro",
              ]}
            >
              <Empleados />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPages />,
    },
  ]);

  return router;
};
