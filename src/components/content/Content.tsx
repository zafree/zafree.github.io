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
      <div className={c(s.Content__row, props.center && s.center)}>
        {props.children}
      </div>
    </>
  )
}

export function Main(props: IContent) {
  return (
    <>
      <div className={c(s.Content__colMain, props.full && s.full)}>
        {props.children}
      </div>
    </>
  )
}
export function Left(props: IContent) {
  return (
    <>
      <div className={s.Content__colLeft}>
        <div className={s.Content__colLeft__wrap}>{props.children}</div>
      </div>
    </>
  )
}
export function Right(props: IContent) {
  return (
    <>
      <div className={s.Content__colRight}>
        <div className={s.Content__colRight__wrap}>{props.children}</div>
      </div>
    </>
  )
}
