import { createSlice } from '@reduxjs/toolkit'

export const hospitalSlice = createSlice({
  name: 'Hospitales',
  initialState: {
    ListaHospitales: [],
    Hospital: {},
  },
  reducers: {
    setHospitales: (state, action) => {
      state.ListaHospitales = action.payload
    },
    setHospital: (state, action) => {
      state.ListaHospitales = action.payload
    },
  },
})

export const { setHospitales, setHospital } = hospitalSlice.actions

export const selectPersonas = (state) => state.ListaPersonas.ListaPersonas
export const selectPersona = (state) => state.Persona.Persona

export default hospitalSlice.reducer
