import { Navigate } from 'react-router-dom'
import React from 'react'
import { JwtUtils } from '../../utils'

const ProtectedRoute = ({ children, roles }): JSX.Element => {
  const token = localStorage.getItem('token')
  const userRoles = JwtUtils.getRolesByToken(token!)

  if (!userRoles.some((uR) => roles.includes(uR.NombreRol))) {
    return <Navigate to="/" />
  }
  return children
}
export default ProtectedRoute
