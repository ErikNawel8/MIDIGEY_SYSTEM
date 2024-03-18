import { createSlice } from '@reduxjs/toolkit'

export const maquinariasSlice = createSlice({
  name: 'Maquinarias', //o maquinas
  initialState: {
    ListaMaquinarias: [],
    Maquinas: {},
  },
  reducers: {
    setMaquinarias: (state, action) => {
      state.ListaMaquinarias = action.payload
    },
    setMaquinas: (state, action) => {
      state.ListaMaquinarias = action.payload
    },
  },
})

export const { setMaquinarias, setMaquinas } = maquinariasSlice.actions

export const selectMaquinarias = (state) => state.ListaPersonas.ListaPersonas
export const selectMaquinas = (state) => state.Persona.Persona

export default maquinariasSlice.reducer
