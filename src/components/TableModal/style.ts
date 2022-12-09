import styled from 'styled-components/native'

export const Container = styled.Modal`
  flex: 1;
`

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  background-color: rgba(0, 0, 0, .6);
`

export const ModalBody = styled.View`
  padding: 24px;
  width: 100%;
  background-color: #FAFAFA;
  border-radius: 8px;
`

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ModalForm = styled.View`
  margin-top: 32px;
`

export const ModalInput = styled.TextInput`
  margin-bottom: 24px;
  padding: 16px;
  background-color: #FFF;
  border: 1px solid rgba(204, 204, 204, .5);
  border-radius: 8px;
`
