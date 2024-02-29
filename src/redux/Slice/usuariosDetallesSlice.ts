import { createSlice } from '@reduxjs/toolkit'

export const usuariosDetallesSlice = createSlice({
  name: 'UsuariosDetalles',
  initialState: {
    ListaUsuarios: [],
    Usuario: {},
  },
  reducers: {
    setUsuarios: (state, action) => {
      state.ListaUsuarios = action.payload
    },
    setUsuario: (state, action) => {
      state.Usuario = action.payload
    },
  },
})

export const { setUsuarios, setUsuario } = usuariosDetallesSlice.actions

export const selectUsuarios = (state) => state.ListaUsuarios.ListaUsuarios
export const selectUsuario = (state) => state.Usuario.Usuario

export default usuariosDetallesSlice.reducer
