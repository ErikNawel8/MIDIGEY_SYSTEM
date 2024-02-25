import { Button, Table } from "antd";
import React from "react";

const Materiales = () => {
  // Datos falsos para la tabla
  const data = [
    {
      key: "1",
      nombre: "Material 1",
      cantidad: 10,
      precio: "$20",
      descripcion: "Descripción del material 1",
      proveedor: "Proveedor A",
      fechaCreacion: "2024-01-01",
      categoria: "Categoría A",
      ubicacion: "Almacén 1",
      codigo: "ABC123",
    },
    {
      key: "2",
      nombre: "Material 2",
      cantidad: 15,
      precio: "$30",
      descripcion: "Descripción del material 2",
      proveedor: "Proveedor B",
      fechaCreacion: "2024-01-05",
      categoria: "Categoría B",
      ubicacion: "Almacén 2",
      codigo: "DEF456",
    },
    // Puedes agregar más datos aquí según sea necesario
  ];

  // Columnas de la tabla
  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "cantidad",
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
    },
    {
      title: "Descripción",
      dataIndex: "descripcion",
      key: "descripcion",
    },
    {
      title: "Proveedor",
      dataIndex: "proveedor",
      key: "proveedor",
    },
    {
      title: "Fecha de Creación",
      dataIndex: "fechaCreacion",
      key: "fechaCreacion",
    },
    {
      title: "Categoría",
      dataIndex: "categoria",
      key: "categoria",
    },
    {
      title: "Ubicación",
      dataIndex: "ubicacion",
      key: "ubicacion",
    },
    {
      title: "Código",
      dataIndex: "codigo",
      key: "codigo",
    },
  ];

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
      <h2>Listado de materiales</h2>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Button>Nuevo material</Button>
      </div>
      {/* Tabla con datos y columnas */}
      <Table
        style={{ width: "100%" }}
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 5 }} // Paginación con 5 elementos por página
        rowKey="key" // Clave única de cada fila en los datos
        bordered // Agrega bordes a la tabla
        size="middle" // Tamaño medio de los elementos de la tabla
        scroll={{ x: "100%" }} // Desplazamiento horizontal para tablas amplias
        loading={false} // Estado de carga de la tabla
      />
    </div>
  );
};

export default Materiales;
