import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IMunicipioDTO, IResponseApi } from '../../interfaces'

const token = localStorage.getItem('token')
const baseUrl = 'https://localhost:7166/'

export const municipiosApi = createApi({
  reducerPath: 'municipiosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  tagTypes: ['Municipios'],

  endpoints: (builder) => ({
    getMunicipios: builder.query<IResponseApi<IMunicipioDTO>, void>({
      query: () => `/Municipios/GetMunicipiosForSO`,
      providesTags: ['Municipios'],
    }),
  }),
})

export const { useGetMunicipiosQuery } = municipiosApi
