import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Drawer,
  Form,
  Input,
  message,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
} from 'antd'
import React from 'react'
import { ColumnProps } from 'antd/es/table'
import { BsPersonVcard } from 'react-icons/bs'
import {
  FaEye,
  FaRegEdit,
  FaRegTrashAlt,
  FaTrashRestoreAlt,
} from 'react-icons/fa'
import { MdEdit, MdOutlineFolderDelete } from 'react-icons/md'
import { IRol, IRolesDTO, IRolListaDTO } from '../../interfaces'
import ModalShowLoading from '../../components/modal-show-loading/modal-show-loading'
import TextArea from 'antd/es/input/TextArea'
import { useGetVistasModulosQuery } from '../../redux/api/vistasModulosApi'
import {
  useEditarRolMutation,
  useGetListaPrincipalRolesQuery,
  useInsertarRolMutation,
  useUpdateEstadoRolMutation,
} from '../../redux/Api/rolesApi'
import dayjs from 'dayjs'
import { useUpdateUsuarioMutation } from '../../redux/Api/usuariosdetallesApi'
import { ModalCambiarEstado } from '../../components'

const Roles = () => {
  // Estado para controlar cuando se abre o cierra el Modal Form Rol:
  const [OpenModalFormRol, SetOpenModalFormRol] = React.useState<boolean>(false)

  // Estado para controlar cuando se abre o cierra el Modal ver detalles de Rol:
  const [OpenModalVerDetalles, SetOpenModalVerDetalles] = React.useState<
    boolean
  >(false)

  // Instancia para el Form:
  const [formRol] = Form.useForm<IRol>()

  const [openModalCambiarEstado, setOpenModalCambiarEstado] = React.useState<
    boolean
  >(false)

  // Estado para capturar la informacion del rol a editar
  // (Este estado puede tener dos valores un objeto IRol para cuando se vaya a editar)
  // (Y puede tener valor undefined que sera cuando no se este en modo editar):
  const [rolSeleccionado, setRolSeleccionado] = React.useState<
    IRol | undefined
  >()

  //Capturar informacion del rol a ver detalle:
  const [rolSeleccionadoDetalles, setRolSeleccionadoDetalles] = React.useState<
    IRolListaDTO | undefined
  >()

  //Capturar informacion del rol a eliminar:
  const [rolSeleccionadoDelete, setRolSeleccionadoDelete] = React.useState<
    IRolListaDTO | undefined
  >()

  // Observo el valor de rolSeleccionado para saber si debo asignar los valores al form:
  React.useEffect(() => {
    if (rolSeleccionado != undefined) {
      formRol.setFieldsValue(rolSeleccionado)
    }
  }, [rolSeleccionado])

  //Fetch peticion para el update/edit de Rol:
  const [
    editarRol,
    {
      isLoading: isLoadingEdit,
      isSuccess: isEditsuccess,
      isError: isErrorEdit,
    },
  ] = useEditarRolMutation()

  React.useEffect(() => {
    if (isEditsuccess) {
      message.success('Rol editado correctamente')
      SetOpenModalFormRol(false)
      setRolSeleccionadoDetalles(undefined)
      formRol.resetFields()
    }
  }, [isEditsuccess])

  React.useEffect(() => {
    if (isErrorEdit) {
      message.error('Ha ocurrido un error al editar el rol')
    }
  }, [isErrorEdit])

  const submitEditRol = (data: IRol) => {
    const dataEdit: IRol = {
      IdRol: rolSeleccionado.IdRol,
      NombreRol: data.NombreRol,
      Descripcion: data.Descripcion,
      Valoracion: rolSeleccionado.Valoracion,
      IdEstadoRegistro: rolSeleccionado.IdEstadoRegistro,
      IdsVistasModulosRoles: data.IdsVistasModulosRoles,
    }
    editarRol(dataEdit)
  }

  //Fetch peticion para el INSERT/CREATE de Rol:
  const [
    insertarRol,
    {
      isLoading: isLoadingInsert,
      isSuccess: isInsertSuccess,
      isError: isErrorInsert,
    },
  ] = useInsertarRolMutation()

  React.useEffect(() => {
    if (isInsertSuccess) {
      message.success('Rol insertado correctamente')
      SetOpenModalFormRol(false)
      setRolSeleccionadoDetalles(undefined)
      formRol.resetFields()
    }
  }, [isInsertSuccess])

  React.useEffect(() => {
    if (isErrorInsert) {
      message.error('Ha ocurrido un error al insertar el rol')
    }
  }, [isErrorInsert])

  const submitInsertRol = (data: IRol) => {
    const dataInsert: IRol = {
      IdRol: 0,
      NombreRol: data.NombreRol,
      Descripcion: data.Descripcion,
      Valoracion: 1,
      IdEstadoRegistro: 1,
      IdsVistasModulosRoles: data.IdsVistasModulosRoles,
    }
    insertarRol(dataInsert)
  }

  //Fetch para obtener la lista de VistasModulos para SelecOption:
  const {
    data: vistasModulosData,
    isLoading: isloadingVistasModulos,
  } = useGetVistasModulosQuery()

  //Fetch para obtener la lista de Roles para la tabla:
  const {
    data: rolesListaPrincipalData,
    isLoading: isLoadingRolesListaP,
  } = useGetListaPrincipalRolesQuery()

  const handleClickIconEdit = (rolEditar: IRolListaDTO) => {
    //Abro el modal:
    SetOpenModalFormRol(true)
    //Capturo la informacion del rol a editar
    const Rol: IRol = {
      IdRol: rolEditar.IdRol,
      NombreRol: rolEditar.NombreRol,
      Descripcion: rolEditar.Descripcion,
      Valoracion: rolEditar.Valoracion,
      IdEstadoRegistro: rolEditar.IdEstadoRegistro,
      IdsVistasModulosRoles: rolEditar.IdsVistasModulosRoles,
    }
    setRolSeleccionado(Rol)
  }

  // Funcion para cerrar el modal:
  const onCloseModal = () => {
    //Volver el objeto rolSeleccionado a undefined:
    setRolSeleccionado(undefined)
    //Limpiar los campos del formulario:
    formRol.resetFields()
    //Cierro el modal:
    SetOpenModalFormRol(false)
  }

  //Fetch peticion para el cambiar estado Activar/Desactivar de Rol:
  const [
    updateEstadoRol,
    {
      isLoading: isLoadingUpdateEstado,
      isSuccess: isUpdateEstadoSuccess,
      isError: isErrorUpdateEstado,
    },
  ] = useUpdateEstadoRolMutation()

  // Funcion que se va a ejecutar cuando se de click a ok paraeliminar un rol
  const handleUpdateEstadoRol = () => {
    updateEstadoRol({
      IdRol: rolSeleccionadoDelete?.IdRol,
      IdEstado: rolSeleccionadoDelete?.IdEstadoRegistro == 1 ? 2 : 1,
    })
  }

  React.useEffect(() => {
    if (isUpdateEstadoSuccess) {
      message.success(
        `El rol ha sido ${
          rolSeleccionadoDelete?.IdEstadoRegistro == 1
            ? 'desactivado'
            : 'restaurado'
        } correctamente`,
      )
      setOpenModalCambiarEstado(false)
      setRolSeleccionadoDelete(undefined)
      formRol.resetFields()
    }
  }, [isUpdateEstadoSuccess])

  React.useEffect(() => {
    if (isErrorUpdateEstado) {
      message.error(
        `Ha ocurrido un error al ${
          rolSeleccionadoDelete?.IdEstadoRegistro == 1
            ? 'desactivar'
            : 'restaurar'
        } el rol`,
      )
    }
  }, [isErrorUpdateEstado])

  const descriptionsProps: DescriptionsProps = {
    size: 'small',
    bordered: true,
    layout: 'vertical',
    column: { xs: 1, sm: 1, md: 1, lg: 1, xl: 3, xxl: 3 },
  }

  //Arreglo de columnas para la tabla antd
  const columnsTableHospitales: ColumnProps<IRolListaDTO>[] = [
    {
      title: 'ID',
      dataIndex: 'IdRol',
      key: 'IdRol',
    },
    {
      title: 'Nombre del rol',
      dataIndex: 'NombreRol',
      key: 'NombreRol',
    },
    {
      title: 'Descripcion del rol',
      dataIndex: 'Descripcion',
      key: 'Descripcion',
      width: 240,
      render: (tex) => (
        <div style={{ fontSize: '13px', textAlign: 'justify' }}>
          <span>{tex}</span>
        </div>
      ),
    },
    {
      title: 'Usuario creador',
      dataIndex: 'NombreUsuarioCreadoPor',
      key: 'NombreUsuarioCreadoPor',
    },
    {
      title: 'Fecha de Creacion',
      dataIndex: 'FechaCreacion',
      key: 'FechaCreacion',
      render: (texto: Date) => <span>{dayjs(texto).format('DD/MM/YYYY')}</span>,
    },
    {
      title: 'NombreEstado',
      dataIndex: 'NombreEstado',
      key: 'NombreEstado',
      align: 'center',
      render: (text) => (
        <Tag color={text == 'Activo' ? 'green' : 'red'}>{text}</Tag>
      ),
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
          <Tooltip title="Editar rol">
            <MdEdit
              onClick={() => handleClickIconEdit(record)}
              color="green"
              size={23}
              style={{ marginRight: '10px' }}
            />
          </Tooltip>

          <Tooltip title="Ver detalles del rol">
            <FaEye
              onClick={() => {
                setRolSeleccionadoDetalles(record)
                SetOpenModalVerDetalles(true)
              }}
              color="gray"
              size={21}
              style={{ marginRight: '10px' }}
            />
          </Tooltip>

          {record.IdEstadoRegistro === 1 ? (
            <Tooltip title="Desactivar rol">
              <FaRegTrashAlt
                color="red"
                size={20}
                style={{ marginRight: '10px' }}
                onClick={() => {
                  setOpenModalCambiarEstado(true)
                  setRolSeleccionadoDelete(record)
                }}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Reactivar rol">
              <FaTrashRestoreAlt
                color="blue"
                size={20}
                style={{ marginRight: '10px' }}
                onClick={() => {
                  setOpenModalCambiarEstado(true)
                  setRolSeleccionadoDelete(record)
                }}
              />
            </Tooltip>
          )}
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
          <h1>Listado de roles</h1>
          <Button onClick={() => SetOpenModalFormRol(true)}>
            Crear nuevo rol
          </Button>
        </div>

        <div style={{ width: '100%' }}>
          <Table
            style={{ maxWidth: '100%', overflowX: 'auto' }}
            columns={columnsTableHospitales}
            dataSource={rolesListaPrincipalData?.Result}
            loading={isLoadingRolesListaP}
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>

      <Modal
        open={OpenModalFormRol}
        onCancel={() => onCloseModal()}
        title={rolSeleccionado != undefined ? 'Editar rol' : 'Crear nuevo rol'}
        footer={null}
      >
        <Card
          title={
            rolSeleccionado != undefined
              ? 'Edite la informacion del rol seleccionado'
              : 'Ingrese la informacion del nuevo rol:'
          }
          loading={false}
        >
          <Form
            form={formRol}
            layout="vertical"
            onFinish={(data: IRol) =>
              rolSeleccionado ? submitEditRol(data) : submitInsertRol(data)
            }
          >
            <Form.Item
              name="NombreRol"
              label="Nombre del rol"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="Descripcion"
              label="Descripcion del rol"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <TextArea size="large" />
            </Form.Item>

            <Form.Item
              name="IdsVistasModulosRoles"
              label="Vistas a las que tiene acceso"
              rules={[
                {
                  required: true,
                  message: 'Este campo es requerido',
                },
              ]}
            >
              <Select
                size="large"
                loading={isloadingVistasModulos}
                options={vistasModulosData?.Result?.filter(
                  (op) => op.IdVistaModulo != 1,
                ).map((option) => ({
                  label: option.NombreVistaModulo,
                  value: option.IdVistaModulo,
                }))}
                mode="multiple"
              />
            </Form.Item>

            <Space>
              <Form.Item>
                <Button size="large" onClick={() => onCloseModal()}>
                  Cancelar
                </Button>
              </Form.Item>

              <Form.Item>
                <Button size="large" type="primary" htmlType="submit">
                  Guardar
                </Button>
              </Form.Item>
            </Space>
          </Form>
        </Card>
      </Modal>

      <ModalShowLoading
        Loading={isLoadingEdit || isLoadingInsert || isLoadingUpdateEstado}
        Text={
          isLoadingEdit
            ? 'Editando el rol'
            : isLoadingInsert
            ? 'Creando el rol'
            : 'Cambiando el estado del rol'
        }
      />

      <Modal
        title={
          <strong style={{ fontSize: '23px' }}>
            Detalles del rol seleccionado
          </strong>
        }
        open={OpenModalVerDetalles}
        onCancel={() => SetOpenModalVerDetalles(false)}
        footer={
          <div style={{ textAlign: 'left', paddingLeft: '10px' }}>
            <strong>Descripcion del rol: </strong>
            <span>{rolSeleccionadoDetalles?.Descripcion}</span>
          </div>
        }
      >
        <div
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          <div style={{ width: '100%' }}>
            <Descriptions
              {...descriptionsProps}
              style={{ width: '100%', marginBottom: '30px' }}
            >
              <Descriptions.Item label={'Nombre del rol:'}>
                {rolSeleccionadoDetalles?.NombreRol}
              </Descriptions.Item>

              <Descriptions.Item label={'Estado del rol:'}>
                <Tag
                  color={
                    rolSeleccionadoDetalles?.NombreEstado == 'Activo'
                      ? 'green'
                      : 'red'
                  }
                >
                  {rolSeleccionadoDetalles?.NombreEstado}
                </Tag>
              </Descriptions.Item>

              <Descriptions.Item label={'Usuario creador:'}>
                {rolSeleccionadoDetalles?.NombreUsuarioCreadoPor}
              </Descriptions.Item>
            </Descriptions>
          </div>

          <div style={{ paddingLeft: '15px', width: '100%' }}>
            <strong style={{ fontSize: '18px' }}>
              Nivel de acceso a vistas:
            </strong>
            <ul style={{ paddingLeft: '20px' }}>
              {rolSeleccionadoDetalles?.IdsVistasModulosRoles?.map(
                (idVistaModulo) => (
                  <li>
                    {
                      vistasModulosData?.Result.find(
                        (vMD) => vMD.IdVistaModulo == idVistaModulo,
                      )?.NombreVistaModulo
                    }
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </Modal>

      <ModalCambiarEstado
        Title={`${
          rolSeleccionadoDelete?.IdEstadoRegistro == 1
            ? 'Eliminar'
            : 'Restaurar'
        } el rol ${rolSeleccionadoDelete?.NombreRol}`}
        //
        Description={`¿Estas seguro que deseas ${
          rolSeleccionadoDelete?.IdEstadoRegistro == 1
            ? 'eliminar'
            : 'restaurar'
        } este rol?`}
        //
        Open={openModalCambiarEstado}
        SetOpen={setOpenModalCambiarEstado}
        ExecuteDelete={handleUpdateEstadoRol}
      />
    </div>
  )
}

export default Roles
