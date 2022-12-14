import { Platform } from 'react-native'
import styled from 'styled-components/native'

const isAndroid = Platform.OS === 'android'

export const Category = styled.TouchableOpacity`
  align-content: center;
  justify-content: center;
  margin-left: 24px;
`

export const Icon = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  height: 44px;
  width: 44px;
  border-radius: 22px;
  background-color: #FFF;
  box-shadow: 0 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`
