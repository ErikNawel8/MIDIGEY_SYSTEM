import { useState } from 'react'
import { OutsideClick } from 'outsideclick-react'

import { DivNav, DivRoll } from '../components'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/Slice/authSlice'
import { JwtUtils } from '../utils'
import { Dropdown, Popover, Tag } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { MdPerson } from 'react-icons/md'
import Link from 'antd/es/typography/Link'

export default function MenuBar() {
  const token = localStorage.getItem('token')
  const userRoles = JwtUtils.getRolesByToken(token)
  const userName = JwtUtils.getUserNameByToken(token)

  const [activo, setActivo] = useState(false)
  console.log('activo', activo)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  //const [logOut] = useSelector((state) => state.users);
  const handleClick = () => {
    //  var token = localStorage.getItem("token");
    //  if (token){
    dispatch(logOut())
    navigate('/login')
    //  }
  }

  console.log('handleClick', handleClick)

  const items = [
    {
      key: '1',
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Perfíl del usuario
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Configuración de la app
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick()}
        >
          Cerrar Sesión
        </Link>
      ),
    },
  ]

  return (
    <>
      <DivNav>
        <div>
          <span style={{ fontWeight: 'bold' }}>MEDIGET SYSTEM</span>
        </div>

        <OutsideClick onOutsideClick={() => setActivo(false)}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <DivRoll>
              <span
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  marginRight: '8px',
                }}
              >
                Tipo de usuario:
              </span>
              <Popover
                content={
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <strong>Roles de usuario:</strong>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {userRoles?.map((uR) => (
                        <span>
                          {'->'} {uR?.NombreRol}
                        </span>
                      ))}
                    </div>
                  </div>
                }
              >
                <Tag
                  color="white"
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    cursor: 'pointer',
                  }}
                >
                  {userRoles && userRoles.length > 0
                    ? userRoles?.reduce((maxRole, currentRole) =>
                        currentRole?.Valoracion > maxRole?.Valoracion
                          ? currentRole
                          : maxRole,
                      )?.NombreRol
                    : ''}
                </Tag>
              </Popover>
            </DivRoll>

            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <MdPerson />
                  <span style={{ marginLeft: '5px', marginRight: '5px' }}>
                    {userName}
                  </span>
                  <DownOutlined />
                </div>
              </a>
            </Dropdown>
          </div>
        </OutsideClick>
      </DivNav>
    </>
  )
}
