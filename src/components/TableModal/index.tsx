import { useState } from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { Close } from '../../assets/Icons/Close'
import { Button } from '../Button'
import { Text } from '../Text'
import { Container, ModalBody, ModalForm, ModalHeader, ModalInput, Overlay } from './style'

type TableModalProps = {
  visible: boolean
  onSave: (tableNumber: string) => void
  onCloseModal: (state: boolean) => void
}

export const TableModal = ({ visible, onSave, onCloseModal }: TableModalProps) => {
  const [tableNumber, setTableNumber] = useState('')
  const isAndroid = Platform.OS === 'android'

  const handleSaveTableNumber = (table: string) => {
    onSave(table)
    onCloseModal(false)
    setTableNumber('')
  }

  return (
    <Container
      visible={visible}
      transparent
      animationType="fade"
    >
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={() => onCloseModal(false)}>
              <Close color="#666" />
            </TouchableOpacity>
          </ModalHeader>
          <ModalForm>
            <ModalInput
              keyboardType="number-pad"
              placeholder="Qual é o número da mesa"
              placeholderTextColor="#666"
              value={tableNumber}
              onChangeText={setTableNumber}
            />
            <Button
              label="Salvar"
              disabled={!tableNumber}
              onPress={() => handleSaveTableNumber(tableNumber)}
            />
          </ModalForm>
        </ModalBody>
      </Overlay>
    </Container>
  )
}
