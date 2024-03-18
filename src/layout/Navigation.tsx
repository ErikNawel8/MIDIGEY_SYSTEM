import { JwtUtils } from '../utils'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdMargin, MdMenu } from 'react-icons/md'
import { MdLocalShipping } from 'react-icons/md'
import { BsPersonVcard } from 'react-icons/bs'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { FaRegHospital, FaUserCog } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'
import { MdHome } from 'react-icons/md'
import { StyledLink } from './Navigation.styled'
import { MdCategory } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useGetVistasModulosConRolesAccesosQuery } from '../redux/Api/vistasModulosApi'
import { Skeleton } from 'antd'
import { ObtenerValoresConfiguracion } from '../utils/valores-de-configuracion'
import ModalShowLoading from '../components/modal-show-loading/modal-show-loading'

export default function Navigation() {
  const token = localStorage.getItem('token')
  const userRoles = JwtUtils.getRolesByToken(token) || []
  const { VistasModulosIds } = ObtenerValoresConfiguracion()

  const location = useLocation()
  const [ruta, setRuta] = useState(location.pathname)
  console.log(ruta)
  const navigate = useNavigate()

  //Fetch para obtener la lista de VistasMOdulos con su lista de rolesIds con acceso a cada una
  const {
    data: VistasModulosConAccesosRolesData,
    isLoading: isLoadingVIstasModulosConAccesosRolesData,
  } = useGetVistasModulosConRolesAccesosQuery()

  //Funcion para obtener retornar true o false si un rol tiene acceso a una vista:
  const VerificarRolTieneAccesoVista = (IdVistaModulo: number): boolean => {
    // Roles con acceso a la VistaModulo a verificar
    const rcv = VistasModulosConAccesosRolesData?.Result?.find(
      (vm) => vm.IdVistaModulo == IdVistaModulo,
    )?.RolesConAcceso
    //resultado de la verificacion:
    const resultVerify = userRoles?.some((uR) => rcv?.includes(uR?.IdRol))
    //
    return resultVerify
  }

  return (
    <>
      {!isLoadingVIstasModulosConAccesosRolesData ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#003A92',
            width: '290px',
            height: '100vh',
            position: 'fixed',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '290px',
              padding: '20px',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div style={{ marginRight: '10px' }}>
              <MdMenu color="white" size={30} />
            </div>
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                fontFamily: 'Jost',
                color: 'white',
                overflow: 'hidden',
              }}
            >
              MEDIGET
            </span>
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            {/************************************************************************/}
            <StyledLink
              onClick={() => {
                navigate('/home')
              }}
            >
              <MdHome style={{ marginRight: '10px' }} size={22} color="white" />
              <span
                style={{
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 'bold',
                }}
              >
                Inicio
              </span>
            </StyledLink>

            {/************************************************************************/}
            {VerificarRolTieneAccesoVista(VistasModulosIds.Hospitales) && (
              <StyledLink
                onClick={() => {
                  navigate('/hospitales')
                }}
              >
                <FaRegHospital
                  style={{ marginRight: '10px' }}
                  size={22}
                  color="white"
                />
                <span
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  Hospitales
                </span>
              </StyledLink>
            )}

            {/************************************************************************/}
            {VerificarRolTieneAccesoVista(
              VistasModulosIds.Administrar_maquinarias,
            ) && (
              <StyledLink
                onClick={() => {
                  navigate('/maquinarias')
                }}
              >
                <MdMargin
                  style={{ marginRight: '10px' }}
                  size={22}
                  color="white"
                />
                <span
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  Administrar maquinarias
                </span>
              </StyledLink>
            )}

            {/************************************************************************/}
            {VerificarRolTieneAccesoVista(
              VistasModulosIds.Administrar_suministros,
            ) && (
              <StyledLink
                onClick={() => {
                  navigate('/suministros')
                }}
              >
                <MdCategory
                  style={{ marginRight: '10px' }}
                  size={22}
                  color="white"
                />
                <span
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  Administrar suministros
                </span>
              </StyledLink>
            )}

            {/************************************************************************/}

            {VerificarRolTieneAccesoVista(
              VistasModulosIds.Control_de_usuario,
            ) && (
              <StyledLink
                onClick={() => {
                  navigate('./usuarios')
                }}
              >
                <FaUserCog
                  style={{ marginRight: '10px' }}
                  size={22}
                  color="white"
                />
                <span
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  Control de usuario
                </span>
              </StyledLink>
            )}

            {/************************************************************************/}
            {VerificarRolTieneAccesoVista(VistasModulosIds.Gestionar_roles) && (
              <StyledLink
                onClick={() => {
                  navigate('./gestionar-roles')
                }}
              >
                <FaUserCog
                  style={{ marginRight: '10px' }}
                  size={22}
                  color="white"
                />
                <span
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  Gestionar roles
                </span>
              </StyledLink>
            )}

            {/************************************************************************/}
            {VerificarRolTieneAccesoVista(
              VistasModulosIds.Gestionar_proveedores,
            ) && (
              <StyledLink
                onClick={() => {
                  navigate('/proveedores')
                }}
              >
                <MdLocalShipping
                  style={{ marginRight: '10px' }}
                  size={22}
                  color="white"
                />
                <span
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  Gestionar proveedores
                </span>
              </StyledLink>
            )}

            {/************************************************************************/}
            {VerificarRolTieneAccesoVista(
              VistasModulosIds.Gestionar_empleados,
            ) && (
              <StyledLink
                onClick={() => {
                  setRuta('/proyecto')
                  navigate('/empleados')
                }}
              >
                <BsPersonVcard
                  style={{ marginRight: '10px' }}
                  size={22}
                  color="white"
                />
                <span
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  Gestionar empleados
                </span>
              </StyledLink>
            )}

            {/************************************************************************/}
            {VerificarRolTieneAccesoVista(
              VistasModulosIds.Gestionar_reportes,
            ) && (
              <StyledLink
                onClick={() => {
                  setRuta('/proyecto')
                }}
              >
                <IoDocumentTextOutline
                  style={{ marginRight: '10px' }}
                  size={22}
                  color="white"
                />
                <span
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  Gestionar reportes
                </span>
              </StyledLink>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#003A92',
            width: '290px',
          }}
        >
          <Skeleton active={true} />
          <Skeleton active={true} />
          <Skeleton active={true} />
          <Skeleton active={true} />
          <Skeleton active={true} />
          <Skeleton active={true} />
          <Skeleton active={true} />
        </div>
      )}

      <ModalShowLoading
        Loading={isLoadingVIstasModulosConAccesosRolesData}
        Text={'Obteniendo los niveles de acceso por roles'}
      />
    </>
  )
}
