/*import ViewContainerPages2 from '../../components'

export default function Home() {
  return (
    <ViewContainerPages2>
      <h1>HOME MEDIGET SYSTEM</h1>
    </ViewContainerPages2>
  )
}*/

import styled from 'styled-components'
import LogoMediget from '/src/images/logo-mediget.png'

// Contenedor principal de la página
const PageContainer = styled.div`
  display: flex;
  justify-content: center; /* Centra horizontalmente el contenido */
  align-items: center; /* Centra verticalmente el contenido */
  height: 100vh; /* Ajusta la altura al 100% del viewport height */
`

// Contenedor para el contenedor principal y el contenedor adicional
const ContentWrapper = styled.div`
  display: flex;
`

// Contenedor principal con margen a la derecha
const MainContainer = styled.div`
  padding: 40px; /* Aumenta el espacio alrededor del contenido */
  margin-right: 20px; /* Agrega un margen a la derecha */
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Aumenta la intensidad de la sombra */
  border-radius: 20px; /* Aumenta el radio de borde para hacerlo más redondeado */
  transition: transform 0.2s ease; /* Agrega una transición suave */

  &:hover {
    transform: translateY(
      -5px
    ); /* Desplaza el contenedor hacia arriba al pasar el cursor */
  }
`

// Contenedor adicional con margen a la izquierda
const AdditionalContainer = styled.div`
  padding: 40px; /* Aumenta el espacio alrededor del contenido */
  margin-left: 20px; /* Agrega un margen a la izquierda */
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Aumenta la intensidad de la sombra */
  border-radius: 20px; /* Aumenta el radio de borde para hacerlo más redondeado */
  transition: transform 0.2s ease; /* Agrega una transición suave */

  &:hover {
    transform: translateY(
      -5px
    ); /* Desplaza el contenedor hacia arriba al pasar el cursor */
  }
`

// Contenedor para el logo
const LogoContainer = styled.div`
  text-align: center;
`

// Estilos para el logo
const Logo = styled.img`
  width: 300px; /* Aumenta el ancho del logo */
  height: auto;
  margin-bottom: 20px;
`

// Contenedor para el texto
const TextContainer = styled.div`
  text-align: center;
`

// Estilos para el texto
const Text = styled.h1`
  &:hover {
    color: #4ca8af; /* Cambia el color del texto al pasar el cursor */
  }
`

// Descripción del sistema
const SystemDescription = styled.p`
  font-size: 16px;
  margin-top: 20px;
  line-height: 1.6;
`

export default function Home() {
  return (
    <div
      style={{
        padding: '80px',
        paddingLeft: '30px',
        paddingRight: '30px',
        width: 'calc(100vw - 290px)',
      }}
    >
      <PageContainer>
        <ContentWrapper>
          <MainContainer>
            <LogoContainer>
              <Logo src={LogoMediget} alt="Mediget Logo" />
            </LogoContainer>
            <TextContainer>
              <Text>HOME MEDIGET SYSTEM</Text>
              <SystemDescription>
                El Sistema Mediget es una plataforma especializada en la gestión
                eficiente del mantenimiento correctivo de maquinarias médicas.
                Permite registrar, controlar y gestionar los tiempos de
                mantenimiento, así como la información relacionada, asegurando
                el funcionamiento óptimo de los equipos médicos en el tiempo.
              </SystemDescription>
            </TextContainer>
          </MainContainer>
          <AdditionalContainer>
            <LogoContainer>
              <Logo src={LogoMediget} alt="Mediget Logo" />
            </LogoContainer>
            <TextContainer>
              <Text>Bienvenido al Sistema Mediget</Text>
            </TextContainer>
          </AdditionalContainer>
        </ContentWrapper>
      </PageContainer>
    </div>
  )
}
