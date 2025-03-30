import { NewGroup } from '@screens/NewGroup'
import { StatusBar } from 'react-native'
import theme from 'src/theme'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'

export default function App() {
  // fontsLoad booleano que indica se as fontes carregou ou não
  // caso não carregue ele vai exibir um loading
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        {fontsLoad ? <NewGroup /> : <Loading />}
      </ThemeProvider>
    </>
  )
}
