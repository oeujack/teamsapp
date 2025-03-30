import { Header } from '@components/Header'
import { Container, Form } from './styles'
import { Highlight } from '@components/Highlight'
import { ButtonIcons } from '@components/ButtonIcons'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcons icon="add" />
      </Form>
      <Filter title="Time A" />
    </Container>
  )
}
