import { defineNuxtPlugin } from '#app'
import { useThemeProvider } from '~/ui/theme'

export default defineNuxtPlugin(() => {
  const { applyTheme } = useThemeProvider()
  const theme = useState<string>('theme')
  applyTheme(theme.value || 'light')
})
