import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./Api/AuthApi";
import authReducer from "./Slice/authSlice";

// --
import { employeeApi } from "./Api/employeeApi";
import employeReducer from "./Slice/employeSlice";

// --
import { hospitalesApi } from "./Api/hospitalesaApi";
import hospitalesReducer from "./Slice/hospitalesSlice";

// --
import { usuariosDetallesApi } from "./Api/usuariosdetallesApi";
import usuariosDetallesReducer from "./Slice/usuariosDetallesSlice";

// --
import { rolesApi } from "./Api/rolesApi";
import rolesReducer from "./Slice/rolesSlice";

export const store = configureStore({
  reducer: {
    //Autenticacion y usuarios
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,

    //Roles y
    roles: rolesReducer,
    [rolesApi.reducerPath]: rolesApi.reducer,

    //empleado
    employes: employeReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,

    //Hospitales
    hospitales: hospitalesReducer,
    [hospitalesApi.reducerPath]: hospitalesApi.reducer,

    //UsuariosDetalles
    usuarios: usuariosDetallesReducer,
    [usuariosDetallesApi.reducerPath]: usuariosDetallesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(employeeApi.middleware)
      .concat(hospitalesApi.middleware)
      .concat(usuariosDetallesApi.middleware)
      .concat(rolesApi.middleware),
});

export default store;
