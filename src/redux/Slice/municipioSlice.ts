import { createSlice } from '@reduxjs/toolkit'

export const municipioSlice = createSlice({
  name: 'Municipios',
  initialState: {
    ListaMunicipio: [],
    Municipio: {},
  },
  reducers: {
    setMunicipios: (state, action) => {
      state.ListaMunicipio = action.payload
    },
    setMunicipio: (state, action) => {
      state.Municipio = action.payload
    },
  },
})

export const { setMunicipios, setMunicipio } = municipioSlice.actions

export const selectMunicipios = (state) => state.ListaMunicipios.ListaMunicipios
export const selectMunicipio = (state) => state.Municipio.Municipio

export default municipioSlice.reducer
