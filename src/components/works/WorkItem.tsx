import Link from 'next/link'
import { work } from '@/api/works/work'

import s from './WorkItem.module.sass'

function WorkItem(props: work) {
  return (
    <>
      <Link className={s.Link} href={`/work/${props.slug}`}>
        <h4>{props.slug}</h4>
      </Link>
    </>
  )
}

export default WorkItem
