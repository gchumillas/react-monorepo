import { SyntheticEvent, useContext } from 'react'
import clsx from 'clsx'

import { context } from './context'
import { TabsItemProps } from './types'

const Item = ({ value, label }: TabsItemProps) => {
  const ctx = useContext(context)

  const doClick = (e: SyntheticEvent) => {
    ctx.onChange(value)
    e.preventDefault()
  }

  return (
    <a
      href={`#${value}`}
      onClick={doClick}
      className={clsx('ui-tabs__item', {
        'ui-tabs__item--selected': value == ctx.value
      })}
    >
      {label}
    </a>
  )
}

export default Item
