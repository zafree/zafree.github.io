'use client'

import c from 'classnames'
import { usePathname } from 'next/navigation'

import { Children, cloneElement } from 'react'
import s from './Navigation.module.sass'
import { INavigation } from '@/api/interface/INavigation'

function Navigation(props: INavigation) {
  const pathname = usePathname()
  return (
    <nav className={s.Navigation}>
      <ul className={s.Navigation__list}>
        {Children.map(props.children, (child: any) => {
          const isActive = pathname === child.props.href
          return (
            <li className={s.Navigation__item}>
              {cloneElement(child, {
                className: c(s.Navigation__link, isActive && s.active),
              })}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
