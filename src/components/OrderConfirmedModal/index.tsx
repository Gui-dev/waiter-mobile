import { Text } from '../Text'
import { CheckCircle } from '../../assets/Icons/CheckCircle'

import { Container, Content, OkButton } from './style'
import { StatusBar } from 'expo-status-bar'

type OrderConfirmedModalProps = {
  visible: boolean
  onOk: () => void
}

export const OrderConfirmedModal = ({ visible, onOk }: OrderConfirmedModalProps) => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#D73035" translucent />
      <Container
        visible={visible}
        animationType="fade"
      >
        <Content>
          <CheckCircle />
          <Text color="#FFF" size={20} weight="600" style={{ marginTop: 12 }}>
            Pedido confirmado
          </Text>
          <Text color="#FFF" opacity={0.9} style={{ marginTop: 4 }}>
            O pedido já entrou na fila de produção!
          </Text>
          <OkButton onPress={onOk}>
            <Text color="#D73035" size={20} weight="600" >OK</Text>
          </OkButton>
        </Content>
      </Container>
    </>
  )
}
