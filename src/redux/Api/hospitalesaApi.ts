import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IClienteDTO, IHospitalDTO, IResponseApi } from '../../interfaces'

const token = localStorage.getItem('token')
const baseUrl = 'https://localhost:7166/'

export const hospitalesApi = createApi({
  reducerPath: 'hospitalesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  tagTypes: ['Hospitales'],

  endpoints: (builder) => ({
    getHospitales: builder.query<IResponseApi<IHospitalDTO>, void>({
      query: () => `/Hospitales/ObtenerHospitales`,
      providesTags: ['Hospitales'],
    }),
    createHospital: builder.mutation({
      query: (newClient) => ({
        url: '/Clientes/insertarClientes',
        method: 'POST',
        body: newClient,
      }),
      invalidatesTags: ['Hospitales'],
    }),
    updateHospital: builder.mutation({
      query: (dataClient) => ({
        url: '/Clientes/actualizarCliente',
        method: 'POST',
        body: dataClient,
      }),
      invalidatesTags: ['Hospitales'],
    }),
    deleteHospital: builder.mutation({
      query: (IdCliente) => ({
        url: `/Clientes/eliminarCliente?IdCliente=${IdCliente}`,
        method: 'POST',
      }),
      invalidatesTags: ['Hospitales'],
    }),
    restoreHospital: builder.mutation({
      query: (IdCliente) => ({
        url: `/Clientes/activarCliente?IdCliente=${IdCliente}`,
        method: 'POST',
      }),
      invalidatesTags: ['Hospitales'],
    }),
  }),
})

export const {
  useGetHospitalesQuery,
  useCreateHospitalMutation,
  useUpdateHospitalMutation,
  useDeleteHospitalMutation,
  useRestoreHospitalMutation,
} = hospitalesApi
