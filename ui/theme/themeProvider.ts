import { themes } from './theme.config'

export const useThemeProvider = () => {
  const theme = useState<string>('theme', () => 'light')

  const applyTheme = (name: string) => {
    const themeConfig = themes[name]
    if (!themeConfig) return

    theme.value = name
    const root = document.documentElement

    Object.entries(themeConfig.palette).forEach(([key, value]) =>
      root.style.setProperty(`--color-${key}`, value)
    )

    Object.entries(themeConfig.spacing).forEach(([key, value]) =>
      root.style.setProperty(`--spacing-${key}`, value)
    )

    root.style.setProperty('--radius', themeConfig.borderRadius)
  }

  const toggleTheme = () => {
    const next = theme.value === 'light' ? 'dark' : 'light'
    applyTheme(next)
  }

  return { theme, applyTheme, toggleTheme }
}