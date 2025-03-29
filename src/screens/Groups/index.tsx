import { GroupCard } from '@components/GroupCard'
import { Container } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useState } from 'react'
import { FlatList, Text } from 'react-native'

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
          <Text>Adicione participantes à sua lista de presença.</Text>
        )}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  )
}
