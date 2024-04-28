'use client'

import { useEffect } from 'react'
import { IContent } from '../../api/interface/IAppLayout'
import s from './Content.module.sass'

function Content(props: IContent) {
  // useEffect(() => {
  //   ;(async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default
  //     const locomotiveScroll = new LocomotiveScroll()
  //   })()
  // }, [])
  return <main className={s.content}>{props.children}</main>
}

export default Content
