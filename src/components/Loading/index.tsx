import { ActivityIndicator } from 'react-native'

import { Container } from './style'

export const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color="#D73035" size="large" />
    </Container>
  )
}
