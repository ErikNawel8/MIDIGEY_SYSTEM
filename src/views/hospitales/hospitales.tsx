import {
  Button,
  Card,
  Drawer,
  Form,
  Input,
  message,
  Select,
  Space,
  Table,
} from 'antd'
import React, { useState } from 'react'
import { ColumnProps } from 'antd/es/table'
import { BsPersonVcard } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineFolderDelete } from 'react-icons/md'
import { IHospital, IHospitalDTO } from '../../interfaces'
import {
  useCreateHospitalMutation,
  useGetHospitalesQuery,
} from '../../redux/Api/hospitalesaApi'
import ModalShowLoading from '../../components/modal-show-loading/modal-show-loading'
import TextArea from 'antd/es/input/TextArea'
import { useGetRegionesQuery } from '../../redux/Api/regionesApi'
import { useGetProvinciasQuery } from '../../redux/Api/provinciasApi'
import { useGetMunicipiosQuery } from '../../redux/Api/municipiosApi'

const Hospitales = () => {
  //Fetch para obtener la lista de Regiones para SelecOption:
  const {
    data: regionesData,
    isLoading: isLoadingRegiones,
  } = useGetRegionesQuery()

  //Fetch para obtener la lista de Provincias para SelecOption:
  const {
    data: provinciasData,
    isLoading: isLoadingProvincias,
  } = useGetProvinciasQuery()

  //Fetch para obtener la lista de Municipios para SelecOption:
  const {
    data: municipiosData,
    isLoading: isLoadingMunicipios,
  } = useGetMunicipiosQuery()

  const [formHospital] = Form.useForm<IHospital>()

  // Wathc para observar el valor del campo IdRegion
  const IdRegion = Form.useWatch('IdRegion', formHospital)

  // Opciones para el campo IdProvincia filtradas por IdRegion:
  const OptionsPronvincias = provinciasData?.Result?.filter(
    (provincia) => provincia.IdRegion == IdRegion,
  ).map((provincia) => ({
    label: provincia.NombreProvincia,
    value: provincia.IdProvincia,
  }))

  // Wathc para observar el valor del campo IdProvincia
  const IdProvincia = Form.useWatch('IdProvincia', formHospital)

  // Opciones para el campo IdMunicipio filtradaspor IdPronvincia:
  const OptionsMunicipios = municipiosData?.Result?.filter(
    (municipio) => municipio.IdProvincia == IdProvincia,
  ).map((municipio) => ({
    label: municipio.NombreMunicipio,
    value: municipio.IdMunicipio,
  }))

  console.log('OptionsMunicipios', OptionsMunicipios)

  const {
    data: hospitalesLista,
    isLoading: isLoadingHospitales,
  } = useGetHospitalesQuery()

  const [drawerVisible, setDrawerVisible] = useState(false)

  const showDrawer = () => {
    setDrawerVisible(true)
  }

  const onCloseDrawer = () => {
    setDrawerVisible(false)
  }

  //Fetch peticion para el create/insert de Hospital:
  const [
    createHospital,
    {
      isLoading: isLoadinCreategHospital,
      isSuccess: isCreateSuccess,
      isError: isErrorCreate,
    },
  ] = useCreateHospitalMutation()

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
          <FaRegEdit style={{ marginRight: '10px' }} />
          <MdOutlineFolderDelete style={{ marginRight: '10px' }} />
        </div>
      ),
    },
  ]

  const submitCreateHospital = (data: IHospital) => {
    const dataInsert: IHospital = {
      IdHospital: 0,
      Nombre: data.Nombre,
      Codigo: data.Codigo,
      IdMunicipio: data.IdMunicipio,
      Telefono1: data.Telefono1,
      Telefono2: data.Telefono2,
      Descripcion: data.Descripcion,
      Email: data.Email,
      Direccion: data.Direccion,
      IdEstadoRegistro: 1,
    }
    createHospital(dataInsert)
  }

  React.useEffect(() => {
    if (isCreateSuccess) {
      message.success('Hospital creado correctamente')
      setDrawerVisible(false)
      formHospital.resetFields()
      //
    } else if (isErrorCreate) {
      message.success('Error al crear el hospital')
    }
  }, [isCreateSuccess, isErrorCreate])

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
          <Button onClick={showDrawer}>Registrar hospital</Button>
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

      <Drawer
        title="Registrar hospital"
        placement="right"
        closable={false}
        onClose={onCloseDrawer}
        visible={drawerVisible}
        width={500}
      >
        <Card loading={isLoadinCreategHospital}>
          <Form
            layout="vertical"
            form={formHospital}
            onFinish={(data: IHospital) => submitCreateHospital(data)}
          >
            <Form.Item
              name="Codigo"
              label="Código"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Nombre"
              label="Nombre"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="IdRegion"
              label="Región"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Select
                loading={isLoadingRegiones}
                options={regionesData?.Result?.map((region) => ({
                  label: region.NombreRegion,
                  value: region.IdRegion,
                }))}
                onChange={() => {
                  formHospital.setFieldValue('IdProvincia', null)
                }}
              />
            </Form.Item>

            <Form.Item
              name="IdProvincia"
              label="Provincia"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Select
                loading={isLoadingProvincias}
                options={OptionsPronvincias}
                onChange={() => {
                  formHospital.setFieldValue('IdMunicipio', null)
                }}
              />
            </Form.Item>

            <Form.Item
              name="IdMunicipio"
              label="Municipio"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Select
                loading={isLoadingMunicipios}
                options={OptionsMunicipios}
              />
            </Form.Item>

            <Form.Item
              name="Telefono1"
              label="Teléfono 1"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Telefono2"
              label="Teléfono 2"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Direccion"
              label="Direccion"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <TextArea />
            </Form.Item>

            <Form.Item
              name="Descripcion"
              label="Descripcion"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <TextArea />
            </Form.Item>

            <Space>
              <Form.Item>
                <Button onClick={() => setDrawerVisible(false)}>
                  Cancelar
                </Button>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Guardar
                </Button>
              </Form.Item>
            </Space>
          </Form>
        </Card>
      </Drawer>

      <ModalShowLoading
        Loading={isLoadinCreategHospital}
        Text={'Creando muevo hospital'}
      />
    </div>
  )
}

export default Hospitales
