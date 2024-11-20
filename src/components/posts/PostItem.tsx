import { IPost } from '@/api/posts/IPost'

import c from 'classnames'
import s from './PostItem.module.sass'
import Button from '../button/Button'
import Pilpil from '@/components/pilpil/Pilpil'

function PostItem(props: IPost) {
  return (
    <>
      <Button
        className={c(s.Work, props?.done && s.done)}
        to={`/loremipsum/${props.slug}`}
      >
        <div className={s.Work__imageWrap}>
          <Pilpil
            width={640}
            height={320}
            small={`/loremipsum/${props.slug}/thumb-small.jpg`}
            large={`/loremipsum/${props.slug}/thumb.jpg`}
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

export default PostItem
