import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
  IHospital,
  IHospitalDTO,
  IRegionDTO,
  IResponseApi,
} from '../../interfaces'

const token = localStorage.getItem('token')
const baseUrl = 'https://localhost:7166/'

export const regionesApi = createApi({
  reducerPath: 'regionesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  tagTypes: ['Regiones'],

  endpoints: (builder) => ({
    getRegiones: builder.query<IResponseApi<IRegionDTO>, void>({
      query: () => `/Regiones/GetRegionesForSO`,
      providesTags: ['Regiones'],
    }),
  }),
})

export const { useGetRegionesQuery } = regionesApi
