import { IWork } from '@/api/works/IWork'

import c from 'classnames'
import s from './WorkItem.module.sass'
import Button from '../button/Button'
import Pilpil from '@/components/pilpil/Pilpil'

function WorkItem(props: IWork) {
  return (
    <>
      <Button
        className={c(s.Work, props?.done && s.done)}
        to={`/work/${props.slug}`}
      >
        <div className={s.Work__imageWrap}>
          {props.mp4 ? (
            <>
              <div className={s.Work__videoAspectRatio}></div>
              <video
                muted
                loop
                playsInline
                autoPlay
                crossOrigin="anonymous"
                className={s.Work__video}
                src={`/work/${props.slug}/thumb.mp4`}
              ></video>
            </>
          ) : (
            <Pilpil
              width={640}
              height={800}
              small={`/work/${props.slug}/thumb-small.jpg`}
              large={`/work/${props.slug}/thumb.jpg`}
              alt={`${props.title} cover image`}
            />
          )}
        </div>
        <div className={s.Work__content}>
          <h3 className={s.Work__heading}>{props.title}</h3>
          {/* <h4 className={s.Work__copy}>{props.desc}</h4> */}
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
