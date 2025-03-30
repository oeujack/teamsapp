import { GroupCard } from '@components/GroupCard'
import { Container } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty'

export function Groups() {
  const [groups, setGroups] = useState([
    'Liga da Justiça',
    'Vingadores',
    'Defensores',
  ])

  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  )
}
