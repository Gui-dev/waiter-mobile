import { ActivityIndicator, TouchableOpacityProps } from 'react-native'

import { Text } from '../Text'
import { Container } from './style'

type ButtonProps = TouchableOpacityProps & {
  label: string
  loading?: boolean
}

export const Button = ({ label, loading, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      {!loading && (
        <Text color="#FFF" weight="600">{label}</Text>
      )}
      {loading && (
        <ActivityIndicator color="#FFF" size="small" />
      )}
    </Container>
  )
}
