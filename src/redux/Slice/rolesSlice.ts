import { createSlice } from '@reduxjs/toolkit'

export const rolesSlice = createSlice({
  name: 'Roles',
  initialState: {
    ListaRoles: [],
    Roles: {},
  },
  reducers: {
    setRoles: (state, action) => {
      state.ListaRoles = action.payload
    },
    setRol: (state, action) => {
      state.Roles = action.payload
    },
  },
})

export const { setRoles, setRol } = rolesSlice.actions

export const selectRoles = (state) => state.ListaRoles.ListaRoles
export const selectRol = (state) => state.Rol.Rol

export default rolesSlice.reducer
