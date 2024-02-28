import React, { useState } from 'react'
import { Button, Drawer, Form, Input, Space, Table, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'

const Maquinarias = () => {
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
        // dataSource={equipamientoMedicoDataArray}
        // columns={columnsTableEquipamiento}
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
