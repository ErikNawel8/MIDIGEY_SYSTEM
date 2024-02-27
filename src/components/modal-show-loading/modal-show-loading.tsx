import { Modal, Spin } from 'antd'

interface IModalShowLoadingProps {
  Text: string
  Loading: boolean
}

const ModalShowLoading = ({ Text, Loading }: IModalShowLoadingProps) => {
  return (
    <Modal open={Loading} closable={false} footer={null}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <center>
          <Spin size="large" />
        </center>
        <br />
        <center>
          <span style={{ fontSize: '20px' }}>{Text}</span>
        </center>
      </div>
    </Modal>
  )
}

export default ModalShowLoading
