export type TabsProps = {
  value: string
  onChange: (_: string) => void
  align?: 'left' | 'center' | 'right'
  className?: string
  children?: React.ReactNode
}

export type TabsItemProps = {
  value: string
  label: string
}

export type ContextProps = {
  value: string
  onChange: (_: string) => void
}
