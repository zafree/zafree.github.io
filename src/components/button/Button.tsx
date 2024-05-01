import Link from 'next/link'
import { IButton } from '@/api/interface/IButton'

import c from 'classnames'
import s from './Button.module.sass'

function Button(props: IButton) {
  // Some flags
  const isLink = typeof props.to !== 'undefined'
  const isExternal =
    isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(props.to as string)

  // Extend className
  const classNames = c(s.Button, props.className)

  // External
  // http, https, //, mailto, etc.
  if (isExternal) {
    return (
      <Link className={classNames} href={props.to as string} target="_blank">
        {props.children}
      </Link>
    )
  }

  // Internal
  if (isLink) {
    return (
      <Link className={classNames} href={props.to as string}>
        {props.children}
      </Link>
    )
  }

  // Default
  return <button className={classNames}>{props.children}</button>
}

export default Button
