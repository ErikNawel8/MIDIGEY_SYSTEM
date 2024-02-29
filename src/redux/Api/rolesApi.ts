import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
  IResponseApi,
  IRolesDTO,
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
  tagTypes: ['Roles'],

  endpoints: (builder) => ({
    // --- Solicitud Get Lista de Roles
    getRoles: builder.query<IResponseApi<IRolesDTO>, void>({
      query: () => `/Roles/ObtenerRoles`,
      providesTags: ['Roles'],
    }),
  }),
})

export const { useGetRolesQuery } = rolesApi
