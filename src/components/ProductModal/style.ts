import styled from 'styled-components/native'

export const Container = styled.Modal`
  flex: 1;
`

export const Image = styled.ImageBackground`
  align-items: flex-end;
  height: 200px;
  width: 100%;
`

export const CloseButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 24px;
  height: 32px;
  width: 32px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 16px;
`

export const ModalBody = styled.View`
  flex: 1;
  padding: 32px 24px 0;
  background-color: #FAFAFA;
`

export const ModalHeader = styled.View`
`

export const IngredientsContainer = styled.View`
  flex: 1;
  margin-top: 32px;
`

export const Ingredient = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, .3);
  border-radius: 8px;
`

export const Footer = styled.View`
  min-height: 110px;
  background-color: #FFF;
`

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`

export const PriceContainer = styled.SafeAreaView`
`
