import { IRol } from '../interfaces'

export const verifyTokenExpiration = (token) => {
  if (token === null || token === undefined) {
    return true
  }

  const decodeTokenVer = token ? JSON.parse(decodeJwt(token)) : ''
  const currentTime = Date.now() / 1000 // Convertir a segundos

  // console.log("IdDelUsuario", decodeTokenVer.IdUsuario);

  if (decodeTokenVer.exp < currentTime) {
    // El token ha expirado
    console.log('---------------token expirado')
    return true
  } else {
    // El token es válido
    console.log('---------------token valido')
    return false
  }
}

export const decodeJwt = (token) => {
  if (!token) {
    return
  }
  return decodeURIComponent(
    window
      .atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  )
}

// export const getRolesByToken = (token) => {
//   try {
//     const decode = token ? JSON.parse(decodeJwt(token)) : ''
//     const roles = decode.Roles
//     console.log('rolesroles', roles)
//     return roles
//   } catch (error) {
//     console.log(error)
//     return []
//   }
// }

export const getRolesByToken = (token: string): IRol[] => {
  try {
    const decode = token ? JSON.parse(decodeJwt(token)) : ''
    var rolesArray: IRol[] = JSON.parse(decode.Roles) || []

    // Ahora 'rolesArray' es un arreglo de objetos que puedes utilizar en tu aplicación
    console.log(decode)

    // const roles: IRol[] = decode.Roles.map((rol: any) => ({
    //   IdRol: rol.IdRol,
    //   NombreRol: rol.NombreRol,
    //   Valoracion: rol.Valoracion,
    //   IdEstadoRegistro: rol.IdEstadoRegistro,
    //   FechaCreacion: rol.FechaCreacion,
    //   IdCreadoPor: rol.IdCreadoPor,
    //   FechaModificacion: rol.FechaModificacion,
    //   IdModificadoPor: rol.IdModificadoPor,
    // }))
    return rolesArray
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getUserNameByToken = (token) => {
  try {
    const decode = token ? JSON.parse(decodeJwt(token)) : ''
    const username = decode ? decode.NombreUsuario : ''
    return username
  } catch (error) {
    return ''
  }
}

export const getUserIdByToken = (token) => {
  try {
    const decode = token ? JSON.parse(decodeJwt(token)) : ''
    const userId = decode ? decode.IdUsuario : ''
    return userId
  } catch (error) {
    return ''
  }
}
