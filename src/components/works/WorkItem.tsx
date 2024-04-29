import Link from 'next/link'
import { IWork } from '@/api/works/IWork'

import s from './WorkItem.module.sass'

function WorkItem(props: IWork) {
  return (
    <>
      <Link className={s.Link} href={`/work/${props.slug}`}>
        <h4>{props.slug}</h4>
      </Link>
    </>
  )
}

export default WorkItem
