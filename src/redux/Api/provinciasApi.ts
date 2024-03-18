import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
  IHospital,
  IHospitalDTO,
  IProvinciaDTO,
  IRegionDTO,
  IResponseApi,
} from '../../interfaces'

const token = localStorage.getItem('token')
const baseUrl = 'https://localhost:7166/'

export const provinciasApi = createApi({
  reducerPath: 'provinciasApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  tagTypes: ['Provincias'],

  endpoints: (builder) => ({
    getProvincias: builder.query<IResponseApi<IProvinciaDTO>, void>({
      query: () => `/Provincias/GetProvinciasForSO`,
      providesTags: ['Provincias'],
    }),
  }),
})

export const { useGetProvinciasQuery } = provinciasApi
