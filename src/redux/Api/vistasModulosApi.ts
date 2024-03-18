import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
  IResponseApi,
  IVistaModuloDTO,
  VistaModuloValuesConfiguracion,
} from '../../interfaces'

const token = localStorage.getItem('token')
const baseUrl = 'https://localhost:7166/'

export const vistasModulosApi = createApi({
  reducerPath: 'vistasModulosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  tagTypes: ['VistasModulos', 'VMRConfigV'],

  endpoints: (builder) => ({
    getVistasModulos: builder.query<IResponseApi<IVistaModuloDTO>, void>({
      query: () => `/VistasModulos/GetVistasModulosParaSO`,
      providesTags: ['VistasModulos'],
    }),

    getVistasModulosConRolesAccesos: builder.query<
      IResponseApi<VistaModuloValuesConfiguracion>,
      void
    >({
      query: () => `/VistasModulos/VistasModulosValoresConfiguracion`,
      providesTags: ['VMRConfigV'],
    }),
  }),
})

export const {
  useGetVistasModulosQuery,
  useGetVistasModulosConRolesAccesosQuery,
} = vistasModulosApi
