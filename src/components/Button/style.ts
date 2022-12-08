import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  background-color: ${({ disabled }) => disabled ? '#999' : '#D73035'};
  border-radius: 48px;
`
