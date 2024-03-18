import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Column, Row } from '../components'
import MenuBar from '../layout/MenuBar'
import Navigation from '../layout/Navigation'

import { JwtUtils } from '.'

const RequireLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    const token = localStorage.getItem('token')

    if (JwtUtils.verifyTokenExpiration(token)) {
      navigate('/login')
    } else {
      console.log('token valido')
    }
  }, [navigate, location])

  return (
    <>
      <Row>
        <div
          style={{
            display: 'flex',
            width: '290px',
            height: '100vh',
          }}
        >
          <Navigation />
        </div>

        <Column>
          <MenuBar />
          <Outlet />
        </Column>
      </Row>
    </>
  )
}

export default RequireLogin
