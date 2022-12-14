import { Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'

const isAndroid = Platform.OS === 'android'

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background-color: #FAFAFA;
`

export const CategoriesContainer = styled.View`
  margin-top: 34px;
  height: 73px;
`

export const MenuContainer = styled.View`
  flex: 1;
  height: 73px;
`

export const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Footer = styled.View`
  min-height: 110px;
`

export const FooterContainer = styled.SafeAreaView`
  padding: 16px 24px;
`
