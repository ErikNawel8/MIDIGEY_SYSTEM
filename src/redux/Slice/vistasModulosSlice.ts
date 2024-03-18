import { createSlice } from '@reduxjs/toolkit'

export const vistasModulosSlice = createSlice({
  name: 'VistasModulos',
  initialState: {
    ListaVistasModulos: [],
    VistaModulo: {},
  },
  reducers: {
    setVistasModulos: (state, action) => {
      state.ListaVistasModulos = action.payload
    },
    setVistaModulo: (state, action) => {
      state.VistaModulo = action.payload
    },
  },
})

export const { setVistasModulos, setVistaModulo } = vistasModulosSlice.actions

export const selectVistasModulos = (state) =>
  state.ListaVistasModulos.ListaVistasModulos
export const selectVistaModulo = (state) => state.VistaModulo.VistaModulo

export default vistasModulosSlice.reducer
