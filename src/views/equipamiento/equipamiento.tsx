import React, { useState } from "react";
import {
  Button,
  Drawer,
  Form,
  Input,
  Space,
  Table,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";

const EquipamientoMedico = () => {
  const [openDrawerFormEquipamiento, setOpenDrawerFormEquipamiento] = useState(false);

  const showDrawer = () => {
    setOpenDrawerFormEquipamiento(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawerFormEquipamiento(false);
  };

  // Definir la interfaz para los datos del equipamiento médico
  interface IEquipamientoMedico {
    Nombre: string;
    Descripcion: string;
    Modelo: string;
    Marca: string;
    Cantidad: number;
  }

  const equipamientoMedicoDataArray: IEquipamientoMedico[] = [
    {
      Nombre: "Electrocardiograma",
      Descripcion: "Equipo para registrar la actividad eléctrica del corazón.",
      Modelo: "ECG-2000",
      Marca: "CardioTech",
      Cantidad: 2,
    },
    {
      Nombre: "Desfibrilador",
      Descripcion: "Equipo para administrar una descarga eléctrica al corazón en caso de paro cardíaco.",
      Modelo: "DF-5000",
      Marca: "MediPulse",
      Cantidad: 1,
    },
    // Otros equipos...
  ];

  const columnsTableEquipamiento: any[] = [
    {
      title: "Nombre",
      dataIndex: "Nombre",
      key: "Nombre",
    },
    {
      title: "Descripción",
      dataIndex: "Descripcion",
      key: "Descripcion",
    },
    {
      title: "Modelo",
      dataIndex: "Modelo",
      key: "Modelo",
    },
    {
      title: "Marca",
      dataIndex: "Marca",
      key: "Marca",
    },
    {
      title: "Cantidad",
      dataIndex: "Cantidad",
      key: "Cantidad",
    },
    {
      title: "Acciones",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Editar</a>
          <a>Eliminar</a>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ width: "100%", marginTop: "100px", marginLeft: "50px" }}>
      <h1>Listado-AMD de Equipamiento Médico</h1>
      <Button onClick={showDrawer}>Agregar Equipamiento</Button>
      <Table
        dataSource={equipamientoMedicoDataArray}
        columns={columnsTableEquipamiento}
        style={{ width: "100%", marginTop: "10px" }}
      />

      <Drawer
        title="Agregar Equipamiento Médico"
        onClose={onCloseDrawer}
        visible={openDrawerFormEquipamiento}
        width={400}
      >
        <Form
          layout="vertical"
          onFinish={() => message.info("Se va a agregar equipamiento médico")}
        >
          <Form.Item
            label="Nombre"
            name="Nombre"
            rules={[{ required: true, message: "El nombre es requerido" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Descripción"
            name="Descripcion"
            rules={[{ required: true, message: "La descripción es requerida" }]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item
            label="Modelo"
            name="Modelo"
            rules={[{ required: true, message: "El modelo es requerido" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Marca"
            name="Marca"
            rules={[{ required: true, message: "La marca es requerida" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Cantidad"
            name="Cantidad"
            rules={[{ required: true, message: "La cantidad es requerida" }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Agregar Equipamiento
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default EquipamientoMedico;