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

// --
import { regionesApi } from "./Api/regionesApi";
import regionesReducer from "./Slice/regionesSlice";

// --
import { provinciasApi } from "./Api/provinciasApi";
import provinciasReducer from "./Slice/provinciasSlice";

// --
import { municipiosApi } from "./Api/municipiosApi";
import municipiosReducer from "./Slice/municipioSlice";

//--
import { maquinariasApi } from "./Api/maquinariasApi";
import maquinariasReducer from "./Slice/maquinariasSlice";

//--
import { vistasModulosApi } from "./Api/vistasModulosApi";
import vistasModulosReducer from "./Slice/vistasModulosSlice";

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

    //Regiones
    usuarios: regionesReducer,
    [regionesApi.reducerPath]: regionesApi.reducer,

    //Provincias
    provincias: provinciasReducer,
    [provinciasApi.reducerPath]: provinciasApi.reducer,

    //Municipios
    municipios: municipiosReducer,
    [municipiosApi.reducerPath]: municipiosApi.reducer,

    //Maquinarias
    maquinarias: maquinariasReducer,
    [maquinariasApi.reducerPath]: maquinariasApi.reducer,

    //VistasModuloss
    vistasModulos: vistasModulosReducer,
    [vistasModulosApi.reducerPath]: vistasModulosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(employeeApi.middleware)
      .concat(hospitalesApi.middleware)
      .concat(usuariosDetallesApi.middleware)
      .concat(rolesApi.middleware)
      .concat(regionesApi.middleware)
      .concat(provinciasApi.middleware)
      .concat(municipiosApi.middleware)
      .concat(maquinariasApi.middleware)
      .concat(vistasModulosApi.middleware),
});

export default store;
