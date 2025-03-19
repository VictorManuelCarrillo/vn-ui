
export const useTheme = () => {
  const theme = useState<string>('theme')
  return { theme }
}