import {
  Button,
  Drawer,
  Form,
  Input,
  Space,
  Table,
  TableProps,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const Proveedores = () => {
  //Estado para controlar cuando se abre/cierra el Drawer
  const [openDrawerFormProveedor, setOpenDrawerFormProveedor] = useState(false);
  // True o False          // Dar valor al estado

  // Lo que pasara cuando den click a abrir el drawer (Nuevo proveedor)
  const showDrawer = () => {
    setOpenDrawerFormProveedor(true);
  };

  // Lo que pasara cuando den click a cerrar el drawer
  const onCloseDrawer = () => {
    setOpenDrawerFormProveedor(false);
  };

  //
  interface IProveedor {
    Nombre: string;
    Apellido: string;
    Nacionalidad: string;
    Direccion: string;
    Correo: string;
    Telefono: string;
  }

  const proveedoresDataArray: IProveedor[] = [
    {
      Nombre: "Juan",
      Apellido: "Pérez",
      Nacionalidad: "Mexicana",
      Direccion: "Calle 123",
      Correo: "juan@example.com",
      Telefono: "1234567890",
    },
    {
      Nombre: "María",
      Apellido: "Gómez",
      Nacionalidad: "Española",
      Direccion: "Avenida 456",
      Correo: "maria@example.com",
      Telefono: "9876543210",
    },
    {
      Nombre: "John",
      Apellido: "Doe",
      Nacionalidad: "Estadounidense",
      Direccion: "Main Street",
      Correo: "john@example.com",
      Telefono: "5551234567",
    },
    {
      Nombre: "Luisa",
      Apellido: "Martínez",
      Nacionalidad: "Colombiana",
      Direccion: "Carrera 789",
      Correo: "luisa@example.com",
      Telefono: "3219876543",
    },
    {
      Nombre: "Anna",
      Apellido: "Schmidt",
      Nacionalidad: "Alemana",
      Direccion: "Straße 10",
      Correo: "anna@example.com",
      Telefono: "1122334455",
    },
  ];

  // Arreglo de columnas para la tabla
  const columnsTableProveedor: TableProps<IProveedor>["columns"] = [
    {
      title: "Nombre",
      dataIndex: "Nombre",
      key: "Nombre",
    },
    {
      title: "Apellido",
      dataIndex: "Apellido",
      key: "Apellido",
    },
    {
      title: "Nacionalidad",
      dataIndex: "Nacionalidad",
      key: "Nacionalidad",
    },
    {
      title: "Correo",
      dataIndex: "Correo",
      key: "Correo",
    },
    {
      title: "Telefono",
      dataIndex: "Telefono",
      key: "Telefono",
    },
    {
      title: "Acciones",
      key: "action",
      render: (_) => (
        <Space size="middle">
          <a>Editar</a>
          <a>Eliminar</a>
        </Space>
      ),
    },
  ];

  // Codigo HTML que retorna el componente:
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        marginLeft: "50px",
      }}
    >
      <h1>Listado de proveedores</h1>
      <Button onClick={() => showDrawer()}>Registrar nuevo proveedor</Button>
      <Table
        dataSource={proveedoresDataArray}
        columns={columnsTableProveedor}
        style={{ width: "1000px", marginTop: "10px" }}
      />

      <Drawer
        title="Basic Drawer"
        onClose={() => onCloseDrawer()}
        open={openDrawerFormProveedor}
      >
        <Form
          layout="vertical"
          style={{ maxWidth: 600 }}
          onFinish={() => message.info("Se va a registrar un proveedor")}
        >
          <Form.Item
            label="Nombres"
            name="Nombres"
            rules={[
              { required: true, message: "El nombre es requerido" },
              { max: 40, message: "El nombre es muy largo" },
              { min: 10, message: "El nombre es muy corto" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Apellidos"
            name="Apellidos"
            rules={[{ required: true, message: "El apellido es requerido" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Correo"
            name="Correo"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Telefono"
            name="Telefono"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Direccion"
            name="Direccion"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Registrar proveedor
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Proveedores;
