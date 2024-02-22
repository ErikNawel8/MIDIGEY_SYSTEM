import { Input, Table, Tag } from "antd";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const { Search } = Input;
const { Column } = Table;
//icons
import {
  IoTrashOutline,
  IoEyeOutline,
  IoClipboardOutline,
  IoEllipsisVerticalSharp,
} from "react-icons/io5";
import {
  ButtonIcon,
  ButtonIconMenuTalba,
  Container,
  DropdownContenttabla,
  SpinnerTables,
} from "../../../components";
import { OutsideClick } from "outsideclick-react";
import { MdRestore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function TablaComponent({
  data,
  isLoading,
  loadingSave,
  editar,
  handleOpenModal,
  goSectionUp,
  setSelected,
  setAction,
}) {
  const [openIndex, setOpenIndex] = useState(-1);
  const handleDrop = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const navigation = useNavigate();

  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (value) => {
    const searchTerm = value.toLowerCase();

    const filter = data?.Result.filter((item) =>
      item.Nombres.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filter);
  };
  useEffect(() => {
    if (data?.Result !== undefined) {
      setFilteredData(data?.Result);
    }
  }, [data?.Result, setFilteredData]);

  TablaComponent.propTypes = {
    data: PropTypes.object, // Cambia el tipo según lo que corresponda
    goSectionUp: PropTypes.func, 
    isLoading: PropTypes.bool.isRequired,
    loadingSave: PropTypes.bool.isRequired,
    setToggle: PropTypes.func,
    editar: PropTypes.func.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired,
    setAction: PropTypes.func.isRequired,
  };
  return (
    <Container
      style={{
        margin: 15,
        padding: 20,
        borderRadius: 12,
      }}
    >
      {isLoading || loadingSave ? (
        <>
          <SpinnerTables />
        </>
      ) : (
        <>
          <div>
            <Search
              placeholder="Buscar por nombre"
              style={{
                width: 304,
                marginTop: 10,
                marginBottom: 40,
              }}
              onSearch={handleSearch}
            />
          </div>

          <Table
            dataSource={filteredData}
            size="small"
            pagination={{
             
              defaultPageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: [6, 12, 18, 24, 32, 40, 45, 50, 55, 60, 100],
              showTotal: (total) => ` ${total} Total`,
            }}
          >
           
            <Column
              title="Nombre completo"
              dataIndex="Nombres"
              key="Nombres"
            
            />
            <Column
              title="Apellidos"
              dataIndex="Apellidos"
              key="apellidos"
           
            />
            <Column title="Teléfono" dataIndex="telefono1" key="telefono1" />
            <Column
              title="Ciudad"
              dataIndex="CiudadNombre"
              key="ciudad"
            />
            <Column title="Correo" dataIndex="Correo" key="correo" />

            <Column
              title="Estado"
              dataIndex="IdEstadoRegistro"
              key="IdEstadoRegistro"
              render={(_, record, index) => (
                <>
                  {
                    <Tag
                      key={`State ${record.IdEstadoRegistro} ${index}`}
                      color={
                        record.IdEstadoRegistro === 1 ? "#304878" : "#FF4D4D"
                      }
                    >
                      {record.NombreEstado}
                    </Tag>
                  }
                </>
              )}
              filters={[
                { text: "Activo", value: 1 },
                { text: "Inactivo", value: 2 },
              ]}
              onFilter={(value, record) => record.IdEstadoRegistro === value}
            />

            <Column
              key="action"
              render={(_, record) => (
                <div style={{ width: 90, zIndex: 100 }}>
                  <ButtonIcon
                    onMouseUp={() => {
                      setSelected(record);
                      setAction(
                        record.IdEstadoRegistro === 1 ? "Desactivar" : "Activar"
                      );
                      handleDrop(record.IdEmpleado);
                    }}
                  >
                    <IoEllipsisVerticalSharp size={22} />
                  </ButtonIcon>
                  <DropdownContenttabla open={openIndex === record.IdEmpleado}>
                    <OutsideClick>
                      {/*----------VIEW BUTTON:----------*/}
                      <ButtonIconMenuTalba
                        onClick={() => {
                          handleDrop(-1);
                          navigation(`/empleado/${record.IdEmpleado}`);
                          
                        }}
                      >
                        <IoEyeOutline
                          size={18}
                          style={{ marginLeft: 5, marginRight: 5 }}
                        />
                        <p>Ver</p>
                      </ButtonIconMenuTalba>

                      {/*----------EDIT BUTTON:----------*/}
                      <ButtonIconMenuTalba
                        onClick={() => {
                          handleDrop(-1);
                          editar(record);
                          goSectionUp();
                        }}
                      >
                        <IoClipboardOutline
                          size={18}
                          style={{ marginLeft: 5, marginRight: 5 }}
                        />
                        <p>Editar</p>
                      </ButtonIconMenuTalba>

                      {/*----------DELETE BUTTON:----------*/}
                      <ButtonIconMenuTalba
                        onClick={() => {
                          handleOpenModal();
                          handleDrop(-1);
                        }}
                      >
                        {record.IdEstadoRegistro === 1 ? (
                          <IoTrashOutline
                            size={18}
                            style={{ marginLeft: 5, marginRight: 5 }}
                          />
                        ) : (
                          <MdRestore
                            size={18}
                            style={{ marginLeft: 5, marginRight: 5 }}
                          />
                        )}

                        <p>
                          {record.IdEstadoRegistro === 1
                            ? "Desactivar"
                            : "Activar"}
                        </p>
                      </ButtonIconMenuTalba>
                    </OutsideClick>
                  </DropdownContenttabla>
                </div>
              )}
            />
          </Table>
        </>
      )}
    </Container>
  );
}
