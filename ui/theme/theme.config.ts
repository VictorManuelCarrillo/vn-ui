export type ThemeDefinition = {
  name: string
  palette: Record<string, string>
  gradients: Record<string, string>
  spacing: Record<string, string>
  borderRadius: string
}

export const themes: Record<string, ThemeDefinition> = {
  light: {
    name: 'light',
    palette: {
      background: '#ffffff',
      text: '#111111',
      primary: '#1976d2',
      secondary: '#9c27b0',
      error: '#d32f2f',
      warning: '#ed6c02',
      info: '#0288d1',
      success: '#2e7d32',
      border: '#e0e0e0'
    },
    gradients: {
      default: 'linear-gradient(to right, var(--color-primary), #1e40af)',
      bluePink: 'linear-gradient(90deg, #3b82f6, #ec4899)',
      greenLime: 'linear-gradient(90deg, #10b981, #a3e635)'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px'
    },
    borderRadius: '3px'
  },
  dark: {
    name: 'dark',
    palette: {
      background: '#121212',
      text: '#ffffff',
      primary: '#90caf9',
      secondary: '#ce93d8',
      error: '#ef5350',
      warning: '#ff9800',
      info: '#03a9f4',
      success: '#66bb6a',
      border: '#333333'
    },
    gradients: {
      default: 'linear-gradient(to right, var(--color-primary), #1e40af)',
      bluePink: 'linear-gradient(90deg, #3b82f6, #ec4899)',
      greenLime: 'linear-gradient(90deg, #10b981, #a3e635)'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px'
    },
    borderRadius: '8px'
  }
}