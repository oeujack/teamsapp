import type { TouchableOpacityProps } from 'react-native'
import { Container, Icon } from './styles'

type ButtonIconsProps = TouchableOpacityProps & {}

export function ButtonIcons({}: ButtonIconsProps) {
  return (
    <Container>
      <Icon name='add' type='PRIMARY'/>
    </Container>
  )
}
