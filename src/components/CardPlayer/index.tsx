import { ButtonIcons } from '@components/ButtonIcons'
import { Container, Icon, Name } from './styles'

type CardPlayerProps = {
  name: string
  onRemove: () => void
}

export function CardPlayer({ name, onRemove }: CardPlayerProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>

      <ButtonIcons icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  )
}
