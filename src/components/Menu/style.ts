import styled from 'styled-components/native'

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Image = styled.Image`
  height: 96px;
  width: 120px;
  border-radius: 8px;
`

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 16px;
`

export const Separator = styled.View`
  margin: 24px 0;
  height: 1px;
  width: 100%;
  background-color: rgba(204, 204, 204, .3);
`

export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  right: 5px;
  bottom: 0;
`
