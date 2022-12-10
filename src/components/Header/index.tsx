import { TouchableOpacity } from 'react-native'
import { Text } from '../Text'

import { Container, Content, OrderHeader, Table } from './style'

type HeaderProps = {
  table: string
  onCancelOrder: () => void
}

export const Header = ({ table, onCancelOrder }: HeaderProps) => {
  return (
    <Container>
      {!table
        ? <>
          <Text opacity={0.9} size={14}>Bem vindo(a) ao</Text>
          <Text size={24} weight="700">
            WAITER<Text size={24} weight="400">APP</Text>
          </Text>
        </>
        : <Content>
          <OrderHeader>
            <Text size={24} weight="600">Pedido</Text>
            <TouchableOpacity onPress={onCancelOrder}>
              <Text color="#D73035" size={14} weight="600">cancelar pedido</Text>
            </TouchableOpacity>
          </OrderHeader>
          <Table>
            <Text color="#666">Mesa {table}</Text>
          </Table>
        </Content>
      }
    </Container>
  )
}
