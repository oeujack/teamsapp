import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'
import { groupGetAll } from './groupGetAll'

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupGetAll()

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroups, newGroup])
    )
  } catch (error) {
    throw error
  }
}
