import { createSlice } from '@reduxjs/toolkit'

export const regionesSlice = createSlice({
  name: 'Regiones',
  initialState: {
    Listaregiones: [],
    Regiones: {},
  },
  reducers: {
    setRegiones: (state, action) => {
      state.Listaregiones = action.payload
    },
    setRegion: (state, action) => {
      state.Regiones = action.payload
    },
  },
})

export const { setRegiones, setRegion } = regionesSlice.actions

export const selectRegiones = (state) => state.ListaRegiones.ListaRegiones
export const selectRegion = (state) => state.Region.Region

export default regionesSlice.reducer
