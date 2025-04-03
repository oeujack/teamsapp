import { TextInputProps, TextInput } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container } from './styles'

type PropsInput = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: PropsInput) {
  const { COLORS } = useTheme()

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}
