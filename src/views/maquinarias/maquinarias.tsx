import React, { useState } from 'react'
import { Button, Drawer, Form, Input, Space, Table, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useGetMaquinariasQuery } from '../../redux/Api/maquinariasApi'
import { IMaquinariasDTO } from '../../interfaces'

const Maquinarias = () => {
  //Fetch para obtener la lista de Maqunarias para SelecOption:
  const {
    data: maquinariaslista,
    isLoading: isLoadingMaquinarias,
  } = useGetMaquinariasQuery()

  const columnsTableMaquinarias: {
    title: string
    dataIndex: keyof IMaquinariasDTO
    key: keyof IMaquinariasDTO
  }[] = [
    {
      title: 'ID',
      dataIndex: 'IdMaquinaria',
      key: 'IdMaquinaria',
    },
    {
      title: 'Nombre Maquinaria',
      dataIndex: 'NombreMaquinaria',
      key: 'NombreMaquinaria',
    },
    {
      title: 'Descripción Maquinaria',
      dataIndex: 'DescripcionMaquinaria',
      key: 'DescripcionMaquinaria',
    },
    {
      title: 'Nombre Proveedor',
      dataIndex: 'NombreProveedor',
      key: 'NombreProveedor',
    },
    {
      title: 'Apellido Proveedor',
      dataIndex: 'ApellidoProveedor',
      key: 'ApellidoProveedor',
    },
    {
      title: 'Número de Serie',
      dataIndex: 'NumeroSerie',
      key: 'NumeroSerie',
    },
    {
      title: 'Modelo',
      dataIndex: 'Modelo',
      key: 'Modelo',
    },
    {
      title: 'Estado',
      dataIndex: 'Estado',
      key: 'Estado',
    },

    {
      title: 'Tiempo Vida Util',
      dataIndex: 'TiempoVidaUtil',
      key: 'TiempoVidaUtil',
    },
    {
      title: 'Tiempo en Uso para Mantenimiento',
      dataIndex: 'TiempoEnUsoParaMant',
      key: 'TiempoEnUsoParaMant',
    },
    {
      title: 'Fecha Inicio Uso',
      dataIndex: 'FechaInicioUso',
      key: 'FechaInicioUso',
    },
    {
      title: 'Fecha Fin Uso',
      dataIndex: 'FechaFinUso',
      key: 'FechaFinUso',
    },
    {
      title: 'Fecha Inicio Mantenimiento',
      dataIndex: 'FechaInicioMantenimiento',
      key: 'FechaInicioMantenimiento',
    },
    {
      title: 'Fecha Fin Mantenimiento',
      dataIndex: 'FechaFinMantenimiento',
      key: 'FechaFinMantenimiento',
    },
    {
      title: 'Descripción Mantenimiento',
      dataIndex: 'DescripcionMantenimiento',
      key: 'DescripcionMantenimiento',
    },
    {
      title: 'Estado Registro',
      dataIndex: 'EstadoRegistro',
      key: 'EstadoRegistro',
    },
  ]
  ///////////////////////////////////////////////////

  const [openDrawerFormMaquinarias, setOpenDrawerFormMaquinarias] = useState(
    false,
  )

  const showDrawer = () => {
    setOpenDrawerFormMaquinarias(true)
  }

  const onCloseDrawer = () => {
    setOpenDrawerFormMaquinarias(false)
  }

  return (
    <div style={{ width: '100%', marginTop: '100px', marginLeft: '50px' }}>
      <h1>Listado de maquinarias</h1>
      <Button onClick={showDrawer}>Agregar Equipamiento</Button>
      <Table
        dataSource={maquinariaslista?.Result}
        loading={isLoadingMaquinarias}
        columns={columnsTableMaquinarias}
        style={{ width: '100%', marginTop: '10px' }}
      />

      <Drawer
        title="Agregar maquinaria"
        onClose={onCloseDrawer}
        visible={openDrawerFormMaquinarias}
        width={400}
      >
        <Form
          layout="vertical"
          onFinish={() => message.info('Se va a agregar equipamiento médico')}
        >
          <Form.Item
            label="Nombre"
            name="Nombre"
            rules={[{ required: true, message: 'El nombre es requerido' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Descripción"
            name="Descripcion"
            rules={[{ required: true, message: 'La descripción es requerida' }]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item
            label="Modelo"
            name="Modelo"
            rules={[{ required: true, message: 'El modelo es requerido' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Marca"
            name="Marca"
            rules={[{ required: true, message: 'La marca es requerida' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Cantidad"
            name="Cantidad"
            rules={[{ required: true, message: 'La cantidad es requerida' }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Agregar Maquinaria
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}

export default Maquinarias
