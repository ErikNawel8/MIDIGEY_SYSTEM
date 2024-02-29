import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IResponseApi, IUsuario, IUsuarioDetalleDTO } from '../../interfaces'

const token = localStorage.getItem('token')
const baseUrl = 'https://localhost:7166/'

export const usuariosDetallesApi = createApi({
  reducerPath: 'usuariosDetallesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  tagTypes: ['UsuariosDetalles'],

  endpoints: (builder) => ({
    // --- Solicitud Get Lista de usuarios
    getUsuarios: builder.query<IResponseApi<IUsuarioDetalleDTO>, void>({
      query: () => `/UsuarioDetalle/ObtenerListaUsuarios`,
      providesTags: ['UsuariosDetalles'],
    }),
    // --- Solicitud Post Crear Usuario
    createUsuario: builder.mutation({
      query: (usuario: IUsuario) => ({
        url: '/UsuarioDetalle/CrearUsuario',
        method: 'POST',
        body: usuario,
      }),
      invalidatesTags: ['UsuariosDetalles'],
    }),
    updateUsuario: builder.mutation({
      query: (dataClient) => ({
        url: '/Clientes/actualizarCliente',
        method: 'POST',
        body: dataClient,
      }),
      invalidatesTags: ['UsuariosDetalles'],
    }),
    deleteUsuario: builder.mutation({
      query: (IdCliente) => ({
        url: `/Clientes/eliminarCliente?IdCliente=${IdCliente}`,
        method: 'POST',
      }),
      invalidatesTags: ['UsuariosDetalles'],
    }),
    restoreUsuario: builder.mutation({
      query: (IdCliente) => ({
        url: `/Clientes/activarCliente?IdCliente=${IdCliente}`,
        method: 'POST',
      }),
      invalidatesTags: ['UsuariosDetalles'],
    }),
  }),
})

export const {
  useGetUsuariosQuery,
  useCreateUsuarioMutation,
  useUpdateUsuarioMutation,
  useDeleteUsuarioMutation,
  useRestoreUsuarioMutation,
} = usuariosDetallesApi
