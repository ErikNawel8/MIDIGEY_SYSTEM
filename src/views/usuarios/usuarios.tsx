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
import FormItem from 'antd/es/form/FormItem'
import { MdOutlineFolderDelete } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { ColumnProps, ColumnType } from 'antd/es/table'
import React, { useEffect, useState } from 'react'
import { BsPersonVcard } from 'react-icons/bs'
import ModalShowLoading from '../../components/modal-show-loading/modal-show-loading'
import { IHospitalDTO, IUsuario, IUsuarioDetalleDTO } from '../../interfaces'
import { useGetEmpleadosParaSelectOptionQuery } from '../../redux/Api/employeeApi'
import { useGetHospitalesQuery } from '../../redux/Api/hospitalesaApi'
import { useGetRolesQuery } from '../../redux/Api/rolesApi'
import {
  useCreateUsuarioMutation,
  useGetEmpleadosParaFormCreateUserQuery,
  useGetUsuariosQuery,
} from '../../redux/Api/usuariosdetallesApi'

const Usuarios = () => {
  // Instancia para el Form:
  const [form] = Form.useForm()

  //Estado para controlar cuando el drawer deba estar abierto:
  const [openDrawerFormUsuario, setOpenDrawerFormUsuario] = React.useState<
    boolean
  >(false)
  // Valor = true | false     setOpenDrawerFormUsuario(false)

  //Estado para capturar al usuario que se va a editar
  const [dataUsuarioEdit, setDataUsuarioEdit] = React.useState<
    IUsuario | undefined
  >()

  //Fetch para obtener la lista de Usuarios:
  const {
    data: usuariosDetallesData,
    isLoading: isLoadingUsuarios,
  } = useGetUsuariosQuery()

  //Fetch para obtener la lista de Empleados para SelecOption:
  const {
    data: empleadosData,
    isLoading: isLoadingEmpleados,
  } = useGetEmpleadosParaFormCreateUserQuery('')

  //Fetch para obtener la lista de Roles para SelecOption:
  const { data: rolesData, isLoading: isLoadingRoles } = useGetRolesQuery()

  const [empleadosSinUsuario, setEmpleadosSinUsuario] = useState([])

  useEffect(() => {
    if (empleadosData) {
      // Filtrar empleados que no tienen usuario
      const empleadosFiltrados = empleadosData.Result.filter(
        (empleado) => !empleado.YaTieneUsuario,
      )
      setEmpleadosSinUsuario(empleadosFiltrados)
    }
  }, [empleadosData])

  //Fetch peticion para el create/insert de Usuario:
  const [
    createUsuario,
    {
      isLoading: isLoadingCreateUsuario,
      isSuccess: isCreateSuccess,
      isError: isErrorCreate,
    },
  ] = useCreateUsuarioMutation()

  React.useEffect(() => {
    if (isCreateSuccess) {
      message.success('Usuario creado correctamente')
      setOpenDrawerFormUsuario(false)
      form.resetFields()
    } else if (isErrorCreate) {
      message.error('Error al crear el usuario')
    }
  }, [isCreateSuccess, isErrorCreate])

  // Funcion para hacer Submit:
  const SubmitCreateUsuario = (usuario: IUsuario) => {
    createUsuario(usuario)
  }

  // Define las columnas para la tabla
  const columnsTableUsers: ColumnType<IUsuarioDetalleDTO>[] = [
    {
      title: 'Id',
      dataIndex: 'IdUsuario',
      key: 'IdUsuario',
    },
    {
      title: 'Nombre Usuario',
      dataIndex: 'NombreUsuario',
      key: 'NombreUsuario',
    },
    {
      title: 'Correo',
      dataIndex: 'Correo',
      key: 'Correo',
    },
    {
      title: 'Rol',
      dataIndex: 'Rol',
      key: 'Rol',
    },
    {
      title: 'Nombre Empleado',
      dataIndex: 'NombreCompletoEmpleado',
      key: 'NombreCompletoEmpleado',
    },
    {
      title: 'Cargo',
      dataIndex: 'Cargo',
      key: 'Cargo',
    },
    {
      title: 'Sexo',
      dataIndex: 'Sexo',
      key: 'Sexo',
    },
    {
      title: 'Acciones',
      render: (_, record) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/*Editar*/}
          <BsPersonVcard
            onClick={
              () =>
                // datos del usuario a editar
                {
                  const dataUserEdit = {
                    IdUsuario: record.IdUsuario,
                    NombreUsuario: record.NombreUsuario,
                    Correo: record.Correo,
                    IdEmpleado: record.IdEmpleado,
                  }

                  setDataUsuarioEdit(dataUserEdit)

                  form.setFieldsValue(dataUserEdit)

                  setOpenDrawerFormUsuario(true)
                }

              //
            }
            style={{ marginRight: '10px', cursor: 'pointer' }}
          />
          <FaRegEdit style={{ marginRight: '10px' }} />
          <MdOutlineFolderDelete style={{ marginRight: '10px' }} />
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
          <h1>Listado de usuarios</h1>
          <Button onClick={() => setOpenDrawerFormUsuario(true)}>
            Crear usuario
          </Button>
        </div>

        <div style={{ width: '100%' }}>
          <Table
            style={{ maxWidth: '100%', overflowX: 'auto' }}
            columns={columnsTableUsers}
            dataSource={usuariosDetallesData?.Result}
            loading={isLoadingUsuarios}
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>

      <Drawer
        title="Crear nuevo usuario"
        open={openDrawerFormUsuario}
        onClose={() => setOpenDrawerFormUsuario(false)}
      >
        <Card loading={isLoadingCreateUsuario}>
          <Form
            form={form}
            layout="vertical"
            onFinish={(data: IUsuario) => SubmitCreateUsuario(data)}
          >
            <Form.Item
              label="Nombre de usuario"
              name={'NombreUsuario'}
              rules={[{ required: true, message: 'Usuario Requerido' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Contraseña" name={'Contraseña'} rules={[]}>
              <Input type={'password'} />
            </Form.Item>

            <Form.Item
              label="Email"
              name={'Correo'}
              rules={[
                {
                  required: true,
                  message: 'El Correo Electronico es Obligatorio!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Empleado"
              name={'IdEmpleado'}
              rules={[
                { required: true, message: 'Por Favor Elija un Empleado!' },
              ]}
            >
              <Select
                loading={isLoadingEmpleados}
                options={empleadosData?.Result.filter(
                  (empleado) => empleado.YaTieneUsuario === false,
                ).map((option) => ({
                  label: option.NombreCompleto,
                  value: option.IdEmpleado,
                }))}
                onChange={(value: number | undefined) => {
                  const empleadoSeleccionad = empleadosData?.Result?.find(
                    (emp) => emp.IdEmpleado == value,
                  )

                  console.log('empleadoSeleccionad', empleadoSeleccionad)

                  if (empleadoSeleccionad.YaTieneUsuario == true) {
                    message.error('Ya este empleado tiene un usuario')
                    form.setFieldValue('IdEmpleado', null)
                  }
                }}
              />
            </Form.Item>

            <Form.Item label="Rol" name={'RolesIds'}>
              <Select
                mode="multiple"
                loading={isLoadingRoles}
                options={rolesData?.Result.map((option) => ({
                  label: option.NombreRol,
                  value: option.IdRol,
                }))}
              />
            </Form.Item>

            <Space>
              <FormItem>
                <Button onClick={() => setOpenDrawerFormUsuario(false)}>
                  Cancelar
                </Button>
              </FormItem>

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
        Loading={isLoadingCreateUsuario}
        Text={'Creando nuevo usuario'}
      />
    </div>
  )
}

export default Usuarios
