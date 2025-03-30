import type { TouchableOpacityProps } from 'react-native'
import { Container, Icon, type ButtonIconTypeStyleProps } from './styles'
import type { MaterialIcons } from '@expo/vector-icons'

type ButtonIconsProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcons({
  icon,
  type = 'PRIMARY',
  ...rest
}: ButtonIconsProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
