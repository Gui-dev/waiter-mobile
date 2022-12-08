import { TouchableOpacityProps } from 'react-native'

import { Text } from '../Text'
import { Container } from './style'

type ButtonProps = TouchableOpacityProps & {
  label: string
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <Text color="#FFF" weight="600">{label}</Text>
    </Container>
  )
}
