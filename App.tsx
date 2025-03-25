import { Groups } from '@screens/Groups'
import { StatusBar, View } from 'react-native'
import theme from 'src/theme'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar translucent />

        <Groups />
      </ThemeProvider>
    </>
  )
}
