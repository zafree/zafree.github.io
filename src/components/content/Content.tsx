import { IContent } from '@/api/interface/IAppLayout'
import c from 'classnames'
import s from './Content.module.sass'

export default function Content(props: IContent) {
  return (
    <>
      <div className={s.Content}>
        <div className={s.Content__container}>{props.children}</div>
      </div>
    </>
  )
}

export function Row(props: IContent) {
  return (
    <>
      <div
        className={c(
          s.Content__row,
          props.flex && s.flex,
          props.center && s.center
        )}
      >
        {props.children}
      </div>
    </>
  )
}

export function Copies(props: IContent) {
  return (
    <>
      <div className={c(s.Content__copies, props.center && s.center)}>
        {props.children}
      </div>
    </>
  )
}

export function Links(props: IContent) {
  return (
    <>
      <div className={c(s.Content__links, props.center && s.center)}>
        <div className={s.Content__linksWrap}>{props.children}</div>
      </div>
    </>
  )
}
