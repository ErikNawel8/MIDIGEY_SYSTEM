import { Button, Table } from 'antd'
import { ColumnProps } from 'antd/es/table'
import { BsPersonVcard } from 'react-icons/bs'
import { IHospitalDTO } from '../../interfaces'
import { useGetHospitalesQuery } from '../../redux/Api/hospitalesaApi'

const Hospitales = () => {
  //Fetch para obtener la lista de Hospitales:
  const {
    data: hospitalesLista,
    isLoading: isLoadingHospitales,
  } = useGetHospitalesQuery()

  const columnsTableHospitales: ColumnProps<IHospitalDTO>[] = [
    {
      title: 'ID',
      dataIndex: 'IdHospital',
      key: 'IdHospital',
      width: 5,
    },
    {
      title: 'Código',
      dataIndex: 'Codigo',
      key: 'Codigo',
    },
    {
      title: 'Nombre',
      dataIndex: 'Nombre',
      key: 'Nombre',
    },
    {
      title: 'Municipio',
      dataIndex: 'NombreMunicipio',
      key: 'NombreMunicipio',
    },
    {
      title: 'Provincia',
      dataIndex: 'NombreProvincia',
      key: 'NombreProvincia',
    },
    {
      title: 'Región',
      dataIndex: 'NombreRegion',
      key: 'NombreRegion',
    },
    {
      title: 'Teléfono',
      dataIndex: 'Telefono1',
      key: 'Telefono1',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Acciones',
      render: () => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <BsPersonVcard style={{ marginRight: '10px' }} />
          <BsPersonVcard style={{ marginRight: '10px' }} />
          <BsPersonVcard />
        </div>
      ),
    },
  ]

  return (
    <div
      style={{
        padding: '80px',
        paddingLeft: '30px',
        paddingRight: '30px',
        width: 'calc(100vw - 290px)',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: '40px',
          }}
        >
          <h1>Listado de hospitales</h1>
          <Button>Registrar hospital</Button>
        </div>

        <div style={{ width: '100%' }}>
          <Table
            style={{ maxWidth: '100%', overflowX: 'auto' }}
            columns={columnsTableHospitales}
            dataSource={hospitalesLista?.Result}
            loading={isLoadingHospitales}
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hospitales
