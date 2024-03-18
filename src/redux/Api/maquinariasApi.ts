import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IMaquinariasDTO, IResponseApi } from '../../interfaces'

const token = localStorage.getItem('token')
const baseUrl = 'https://localhost:7166/'

export const maquinariasApi = createApi({
  reducerPath: 'maquinariasApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  tagTypes: ['Maquinarias'],

  endpoints: (builder) => ({
    getMaquinarias: builder.query<IResponseApi<IMaquinariasDTO>, void>({
      query: () => `/Maquinarias/ObtenerMaquinas`,
      providesTags: ['Maquinarias'],
    }),
    createMaquinarias: builder.mutation({
      query: (newClient: IMaquinariasDTO) => ({
        url: '/Maquinarias/InsertarMaquinas',
        method: 'POST',
        body: newClient,
      }),
      invalidatesTags: ['Maquinarias'],
    }),
    updateMaquinarias: builder.mutation({
      query: (dataClient) => ({
        url: '/Clientes/actualizarCliente',
        method: 'POST',
        body: dataClient,
      }),
      invalidatesTags: ['Maquinarias'],
    }),
    deleteMaquinarias: builder.mutation({
      query: (IdCliente) => ({
        url: `/Clientes/eliminarCliente?IdCliente=${IdCliente}`,
        method: 'POST',
      }),
      invalidatesTags: ['Maquinarias'],
    }),
    restoreMaquinarias: builder.mutation({
      query: (IdCliente) => ({
        url: `/Clientes/activarCliente?IdCliente=${IdCliente}`,
        method: 'POST',
      }),
      invalidatesTags: ['Maquinarias'],
    }),
  }),
})

export const {
  useGetMaquinariasQuery,
  useCreateMaquinariasMutation,
  useUpdateMaquinariasMutation,
  useDeleteMaquinariasMutation,
  useRestoreMaquinariasMutation,
} = maquinariasApi
