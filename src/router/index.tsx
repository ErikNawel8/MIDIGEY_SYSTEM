import { createBrowserRouter } from 'react-router-dom'
import { Home, Materiales, Empleados, Usuarios, Roles } from '../views'
import Login from '../page/Login'
import ErrorPages from '../page/ErrorPages'
import RequireLogin from '../utils/require-login'
import ProtectedRoute from './protected-route/protected-route'
import { Toaster } from 'react-hot-toast'
import { Proveedores } from '../views/proveedores'
import { Maquinarias } from '../views/maquinarias'
import { Hospitales } from '../views/hospitales'
import { useGetVistasModulosConRolesAccesosQuery } from '../redux/Api/vistasModulosApi'

export const createRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <RequireLogin />
          <Toaster position="top-center" />
        </>
      ),
      errorElement: <ErrorPages />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        //
        {
          path: '/materiales-lista',
          element: (
            <ProtectedRoute
              roles={[
                'Administrador De Usuario',
                'Administrador',
                'Administrador de centro',
              ]}
            >
              <Materiales />
            </ProtectedRoute>
          ),
        },

        //

        //
        {
          path: '/proveedores',
          element: (
            <ProtectedRoute roles={['Administrador', 'Asistente']}>
              <Proveedores />
            </ProtectedRoute>
          ),
        },
        ///////////

        {
          path: '/maquinarias', // Agrega la ruta para la vista de maquinarias
          element: (
            <ProtectedRoute
              roles={['Administrador', 'Asistente', 'Administrador de centro']}
            >
              <Maquinarias />
            </ProtectedRoute>
          ),
        },

        ///////////

        {
          path: '/home', // Agrega la ruta para la vista de maquinarias
          element: (
            <ProtectedRoute
              roles={[
                'Administrador',
                'Asistente',
                'Administrador de centro',
                'Asistente',
              ]}
            >
              <Home />
            </ProtectedRoute>
          ),
        },

        {
          path: '/usuarios', // Agrega la ruta para la vista de Control de usuarios
          element: (
            <ProtectedRoute roles={['Administrador']}>
              <Usuarios />
            </ProtectedRoute>
          ),
        },

        {
          path: '/gestionar-roles', // Agrega la ruta para la vista de Control de usuarios
          element: (
            <ProtectedRoute roles={['Administrador']}>
              <Roles />
            </ProtectedRoute>
          ),
        },

        {
          path: '/hospitales', // Agrega la ruta para la vista de hospitales
          element: (
            <ProtectedRoute
              roles={['Administrador', 'Administrador de centro']}
            >
              <Hospitales />
            </ProtectedRoute>
          ),
        },
        {
          ///////////////////
          path: '/empleados',
          element: (
            <ProtectedRoute
              roles={[
                'Administrador De Usuario',
                'Administrador',
                'Administrador de centro',
              ]}
            >
              <Empleados />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <ErrorPages />,
    },
  ])

  return router
}
