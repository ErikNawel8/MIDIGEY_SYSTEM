import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./Api/AuthApi";
import authReducer from "./Slice/authSlice";
import { clientsApi } from "./Api/clientsApi";
import { usersApi } from "./Api/usersApi";
import clientsReducer from "./Slice/clientsSlice";
import proveedoresReducer from "./Slice/ProveedorSlice";
import { proveedorApi } from "./Api/proveedorApi";
import employeReducer from "./Slice/employeSlice";
import { cargoApi } from "./Api/cargoApi";
import cargoReducer from "./Slice/cargoSlice";

import { employeeApi } from "./Api/employeeApi";
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
import { unitsOfMeasurementsApi } from "./Api/unitsOfMeasurementsApi";
import unitsOfMeasurementsReducer from "./Slice/unitsOfMeasurementsSlice";
// ---
import { productsApi } from "./Api/productsApi";
import productsReducer from "./Slice/productsSlice";

import { proyectoApi } from "./Api/ProyectoApi";
import proyectoReducer from "./Slice/ProyectoSlice";

//---
import { personasApi } from "./Api/personasApi";
import personasReducer from "./Slice/personaSlice";

import { uQVerificarApi } from "./Api/uQVerificarApi";
import uqVerificarReducer from "./Slice/uqVerificarSlice";

// --
import { entitiesApi } from "./Api/entitiesApi";
import entitiesReducer from "./Slice/entitieSlice";

// --
import { hospitalesApi } from "./Api/hospitalesaApi";
import hospitalesReducer from "./Slice/hospitalesSlice";

export const store = configureStore({
  reducer: {
    //Autenticacion y usuarios
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,

    //Clientes
    clients: clientsReducer,
    [clientsApi.reducerPath]: clientsApi.reducer,

    //User
    [usersApi.reducerPath]: usersApi.reducer,

    //Proveedores
    proveedores: proveedoresReducer,
    [proveedorApi.reducerPath]: proveedorApi.reducer,
    //cargos
    cargos: cargoReducer,
    [cargoApi.reducerPath]: cargoApi.reducer,

    //proyectos
    proyecto: proyectoReducer,
    [proyectoApi.reducerPath]: proyectoApi.reducer,

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

    //Productos
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,

    //Personas
    personas: personasReducer,
    [personasApi.reducerPath]: personasApi.reducer,

    //Unidades de medidas
    unitsOfMeasurements: unitsOfMeasurementsReducer,
    [unitsOfMeasurementsApi.reducerPath]: unitsOfMeasurementsApi.reducer,

    //Unidades ------------------------------------------------------------------------------
    entities: entitiesReducer,
    [entitiesApi.reducerPath]: entitiesApi.reducer,

    //Hospitales
    hospitales: hospitalesReducer,
    [hospitalesApi.reducerPath]: hospitalesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(clientsApi.middleware)
      .concat(usersApi.middleware)
      .concat(proveedorApi.middleware)
      .concat(employeeApi.middleware)
      .concat(citiesApi.middleware)
      .concat(cargoApi.middleware)
      .concat(sexesApi.middleware)
      .concat(countriesApi.middleware)
      .concat(companiesApi.middleware)
      .concat(ConfigPerfilApi.middleware)
      .concat(uQVerificarApi.middleware)
      .concat(productsApi.middleware)
      .concat(proyectoApi.middleware)
      .concat(personasApi.middleware)
      .concat(entitiesApi.middleware)
      .concat(unitsOfMeasurementsApi.middleware)
      .concat(hospitalesApi.middleware),
});

export default store;
