import type { TouchableOpacityProps } from 'react-native'
import { Container, Title, type FilterStyleProps } from './styles'

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string
  }

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
