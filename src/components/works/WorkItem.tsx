import { IWork } from '@/api/works/IWork'

import c from 'classnames'
import s from './WorkItem.module.sass'
import Button from '../button/Button'
import Image from 'next/image'

function WorkItem(props: IWork) {
  return (
    <>
      <Button
        className={c(s.Work, props?.done && s.done)}
        to={`/work/${props.slug}`}
      >
        <div className={s.Work__imageWrap}>
          <Image
            className={s.Work__image}
            width={1280}
            height={640}
            src={`/work/${props.slug}/cover.jpg`}
            alt={`${props.title} cover image`}
          />
        </div>
        <div className={s.Work__content}>
          <h3 className={s.Work__heading}>{props.title}</h3>
          <h4 className={s.Work__copy}>{props.desc}</h4>
          <ul className={s.Work__typelist}>
            {props.tags?.map((tag, index) => (
              <li key={index} className={s.Work__typelist__tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Button>
    </>
  )
}

export default WorkItem
