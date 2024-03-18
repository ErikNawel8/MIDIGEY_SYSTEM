import { createSlice } from '@reduxjs/toolkit'

export const provinciasSlice = createSlice({
  name: 'Provincias',
  initialState: {
    ListaProvincias: [],
    Provincias: {},
  },
  reducers: {
    setProvincias: (state, action) => {
      state.ListaProvincias = action.payload
    },
    setProvincia: (state, action) => {
      state.Provincias = action.payload
    },
  },
})

export const { setProvincias, setProvincia } = provinciasSlice.actions

export const selectProvincias = (state) => state.ListaProvincias.ListaProvincias
export const selectProvincia = (state) => state.Provincia.v

export default provinciasSlice.reducer
