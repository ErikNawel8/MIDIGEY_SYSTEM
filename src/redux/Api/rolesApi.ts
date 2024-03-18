import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
  IResponseApi,
  IRol,
  IRolesDTO,
  IRolEstado,
  IRolListaDTO,
  IUsuario,
  IUsuarioDetalleDTO,
} from '../../interfaces'

const token = localStorage.getItem('token')
const baseUrl = 'https://localhost:7166/'

export const rolesApi = createApi({
  reducerPath: 'rolesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  tagTypes: ['RolesForSO', 'RolesForListaP'],

  endpoints: (builder) => ({
    // --- Solicitud Get Lista de Roles (Para el Select Option)
    getRoles: builder.query<IResponseApi<IRolesDTO>, void>({
      query: () => `/Roles/ObtenerRoles`,
      providesTags: ['RolesForSO'],
    }),

    // --- Solicitud Get Lista de Roles (Para la tabla que sale en la vista de Gestionar roles)
    getListaPrincipalRoles: builder.query<IResponseApi<IRolListaDTO>, void>({
      query: () => `/Roles/ObtenerListaPrincipalRoles`,
      providesTags: ['RolesForListaP'],
    }),

    // --- Solicitud Post Editar rol
    editarRol: builder.mutation({
      query: (usuario: IRol) => ({
        url: '/Roles/EditarRol',
        method: 'POST',
        body: usuario,
      }),
      invalidatesTags: ['RolesForSO', 'RolesForListaP'],
    }),

    // --- Solicitud Post Insert rol
    insertarRol: builder.mutation({
      query: (usuario: IRol) => ({
        url: '/Roles/InsertarRol',
        method: 'POST',
        body: usuario,
      }),
      invalidatesTags: ['RolesForSO', 'RolesForListaP'],
    }),

    // --- Solicitud Post Cambiar el estado del rol
    updateEstadoRol: builder.mutation({
      query: (rolCambioEstadoData: IRolEstado) => ({
        url: '/Roles/CambiarEstadoRol',
        method: 'POST',
        body: rolCambioEstadoData,
      }),
      invalidatesTags: ['RolesForSO', 'RolesForListaP'],
    }),
  }),
})

export const {
  useGetRolesQuery,
  useGetListaPrincipalRolesQuery,
  useEditarRolMutation,
  useInsertarRolMutation,
  useUpdateEstadoRolMutation,
} = rolesApi
