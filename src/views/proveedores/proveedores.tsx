import React, { useState } from 'react'
import { Button, Drawer, Form, Input, Space, Table, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { MdOutlineFolderDelete, MdModeEdit } from 'react-icons/md'

const Proveedores = () => {
  const [openDrawerFormProveedor, setOpenDrawerFormProveedor] = useState(false)

  const showDrawer = () => {
    setOpenDrawerFormProveedor(true)
  }

  const onCloseDrawer = () => {
    setOpenDrawerFormProveedor(false)
  }

  interface IProveedor {
    key: React.Key
    Nombre: string
    Apellido: string
    Nacionalidad: string
    Direccion: string
    Correo: string
    Telefono: string
  }

  const [proveedoresDataArray, setProveedoresDataArray] = useState<
    IProveedor[]
  >([
    {
      key: '1',
      Nombre: 'Juan',
      Apellido: 'Pérez',
      Nacionalidad: 'RD',
      Direccion: 'Calle 123',
      Correo: 'juan@example.com',
      Telefono: '1234567890',
    },
    {
      key: '2',
      Nombre: 'María',
      Apellido: 'Gómez',
      Nacionalidad: 'RD',
      Direccion: 'Avenida 456',
      Correo: 'maria@example.com',
      Telefono: '9876543210',
    },
    {
      key: '3',
      Nombre: 'John',
      Apellido: 'Doe',
      Nacionalidad: 'RD',
      Direccion: 'Main Street',
      Correo: 'john@example.com',
      Telefono: '5551234567',
    },
    {
      key: '4',
      Nombre: 'Luisa',
      Apellido: 'Martínez',
      Nacionalidad: 'RD',
      Direccion: 'Carrera 789',
      Correo: 'luisa@example.com',
      Telefono: '3219876543',
    },
    {
      key: '5',
      Nombre: 'Anna',
      Apellido: 'Schmidt',
      Nacionalidad: 'RD',
      Direccion: 'Straße 10',
      Correo: 'anna@example.com',
      Telefono: '1122334455',
    },
  ])

  const columnsTableProveedor = [
    {
      title: 'Nombre',
      dataIndex: 'Nombre',
      key: 'Nombre',
    },
    {
      title: 'Apellido',
      dataIndex: 'Apellido',
      key: 'Apellido',
    },
    {
      title: 'Nacionalidad',
      dataIndex: 'Nacionalidad',
      key: 'Nacionalidad',
    },
    {
      title: 'Correo',
      dataIndex: 'Correo',
      key: 'Correo',
    },
    {
      title: 'Telefono',
      dataIndex: 'Telefono',
      key: 'Telefono',
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MdModeEdit onClick={() => handleEditProveedor(record)} />
          <MdOutlineFolderDelete
            onClick={() => handleDeleteProveedor(record)}
          />
        </Space>
      ),
    },
  ]

  const handleEditProveedor = (record: IProveedor) => {
    // Lógica para editar un proveedor
  }

  const handleDeleteProveedor = (record: IProveedor) => {
    // Lógica para eliminar un proveedor
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        padding: '80px',
        boxSizing: 'border-box',
        overflow: 'auto',
      }}
    >
      <h1>Listado de proveedores</h1>
      <Button onClick={showDrawer}>Registrar nuevo proveedor</Button>
      <Table
        dataSource={proveedoresDataArray}
        columns={columnsTableProveedor}
        style={{ marginTop: '20px', width: '80%' }}
        pagination={{ pageSize: 5 }}
      />

      <Drawer
        title="Registrar nuevo proveedor"
        onClose={onCloseDrawer}
        visible={openDrawerFormProveedor}
        width={300}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={() => message.info('Se va a registrar un proveedor')}
        >
          <Form.Item
            label="Nombres"
            name="Nombres"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Apellidos"
            name="Apellidos"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Correo" name="Correo" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Telefono"
            name="Telefono"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Direccion"
            name="Direccion"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Registrar proveedor
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}

export default Proveedores
