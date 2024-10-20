import React from 'react'
import clsx from 'clsx'
import { context } from './context'
import Item from './Item'
import { TabsProps } from './types'
import './Tabs.scss'

const Tabs = ({ value, onChange, align, className, children }: TabsProps) => {
  const ctxValue = React.useMemo(() => ({ value, onChange }), [value, onChange])

  return (
    <context.Provider value={ctxValue}>
      <ul className={clsx('ui ui-tabs', className, `ui-tabs--${align}`)}>
        {React.Children.map(children, (child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    </context.Provider>
  )
}
Tabs.Item = Item

export default Tabs
