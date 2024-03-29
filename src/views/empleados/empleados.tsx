import { Button, Table } from 'antd'
import React from 'react'
import { useGetEmployeQuery } from '../../redux/Api/employeeApi'

const Empleados = () => {
  //Fetch para obtener la lista de clientes:
  const {
    data: empleadsLista,
    isLoading: isLoadingEmpleados,
  } = useGetEmployeQuery('')

  console.log('empleadsLista', empleadsLista)

  // Columnas de la tabla
  const columns = [
    {
      title: 'ID',
      dataIndex: 'IdEmpleado',
      key: 'IdEmpleado',
    },
    {
      title: 'Nombre',
      dataIndex: 'NombreEmpleado',
      key: 'NombreEmpleado',
    },
    {
      title: 'Apellido',
      dataIndex: 'ApellidoEmpleado',
      key: 'ApellidoEmpleado',
    },
    {
      title: 'Dirección',
      dataIndex: 'Direccion',
      key: 'Direccion',
    },
    {
      title: 'Identificación',
      dataIndex: 'Identificacion',
      key: 'Identificacion',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
  ]

  return (
    <div
      style={{
        width: 'calc(100vw - 100px)',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '100px',
        marginLeft: '50px',
      }}
    >
      <h2>Listado de empleados</h2>
      <div style={{ marginTop: '20px', marginBottom: '10px' }}>
        <Button style={{ marginBottom: '20px' }}>Nuevo empleado</Button>
      </div>
      {/* Tabla con datos y columnas */}
      <Table
        style={{ width: '80%' }} // Ajusta la anchura de la tabla al 100%
        dataSource={empleadsLista?.Result}
        columns={columns}
        pagination={{ pageSize: 5 }} // Paginación con 5 elementos por página
        rowKey="key" // Clave única de cada fila en los datos
        bordered // Agrega bordes a la tabla
        size="middle" // Tamaño medio de los elementos de la tabla
        loading={isLoadingEmpleados} // Estado de carga de la tablas
      />
    </div>
  )
}

export default Empleados
