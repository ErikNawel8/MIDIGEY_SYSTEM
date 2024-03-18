import { Modal } from 'antd'
import { MdDelete } from 'react-icons/md'

interface IModalCambiarEstado {
  Title: string
  Description: string
  Open: boolean
  SetOpen: React.Dispatch<React.SetStateAction<boolean>>
  ExecuteDelete: () => void
}

const ModalCambiarEstado = ({
  Title,
  Description,
  Open,
  SetOpen,
  ExecuteDelete,
}: IModalCambiarEstado) => {
  return (
    <Modal
      title={Title}
      open={Open}
      onCancel={() => SetOpen(false)}
      onOk={() => ExecuteDelete()}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <MdDelete color="red" size={40} />
        </div>
        <br />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <strong style={{ fontSize: '25px' }}>{Description}</strong>
        </div>
      </div>
    </Modal>
  )
}

export default ModalCambiarEstado
