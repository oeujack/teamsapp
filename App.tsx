import { Groups } from '@screens/Groups'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import theme from 'src/theme'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  // fontsLoad booleano que indica se as fontes carregou ou não
  // caso não carregue ele vai exibir um loading
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <>
      <ThemeProvider theme={theme}>
        {fontsLoad ? (
          <Groups />
        ) : (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator size="large" />
          </View>
        )}
      </ThemeProvider>
    </>
  )
}
