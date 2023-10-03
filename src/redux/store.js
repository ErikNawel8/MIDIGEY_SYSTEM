import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./Api/AuthApi";
import authReducer from "./Slice/authSlice";
import { clientsApi } from "./Api/clientsApi";
import employeReducer from "./Slice/employeSlice";
import { cargoApi } from "./Api/cargoApi";
import cargoReducer from "./Slice/cargoSlice";

import { employeeApi } from "./Api/employeeApi";
import clientsReducer from "./Slice/clientsSlice";
import { citiesApi } from "./Api/citiesApi";
import citiesReducer from "./Slice/citiesSlice";
import { sexesApi } from "./Api/sexesApi";
import sexesReducer from "./Slice/sexesSlice";
import { countriesApi } from "./Api/countriesApi";
import countriesReducer from "./Slice/countriesSlice";
import { companiesApi } from "./Api/companiesApi";
import companiesReducer from "./Slice/companiesSlice";
import { ConfigPerfilApi } from "./Api/configPerfilApi";
import configPerfilReducer from "./Slice/configPerfilSlice";

//import { uQVerificarApi } from "./Api/uQVerificarApi";
import { uQVerificarApi } from "./Api/uQVerificarApi";
import uqVerificarReducer from "./Slice/uqVerificarSlice";


export const store = configureStore({
  reducer: {
    //Autenticacion y usuarios
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,

    //Clientes
    clients: clientsReducer,
    [clientsApi.reducerPath]: clientsApi.reducer,

    cargos: cargoReducer,
    [cargoApi.reducerPath]: cargoApi.reducer,

    //empleado 
    employes: employeReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,

    //Ciudades
    cities: citiesReducer,
    [citiesApi.reducerPath]: citiesApi.reducer,

    //Sexos
    sexes: sexesReducer,
    [sexesApi.reducerPath]: sexesApi.reducer,

    //Paises
    countries: countriesReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,

    //Empresas
    companies: companiesReducer,
    [companiesApi.reducerPath]: companiesApi.reducer,

    //Configuracion de perfil:
    perfil: configPerfilReducer,
    [ConfigPerfilApi.reducerPath]: ConfigPerfilApi.reducer,

    //Verificacion de Campos unicos:
    existe: uqVerificarReducer,
    [uQVerificarApi.reducerPath]: uQVerificarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(clientsApi.middleware)
      .concat(employeeApi.middleware)
      .concat(citiesApi.middleware)
      .concat(cargoApi.middleware)
      .concat(sexesApi.middleware)
      .concat(countriesApi.middleware)
      .concat(companiesApi.middleware)
      .concat(ConfigPerfilApi.middleware)
      .concat(uQVerificarApi.middleware),
});

export default store;
