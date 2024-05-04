import { IEndorsement } from '@/api/endorsement/IEndorsement'

import c from 'classnames'
import s from './Item.module.sass'
import Button from '../button/Button'
import Pilpil from '@/components/pilpil/Pilpil'

function Item(props: IEndorsement) {
  return (
    <>
      <div className={s.Endorsement}>
        <div className={s.Endorsement__container}>
          <blockquote className={s.Endorsement__inner}>
            <div className={s.Endorsement__copy}>
              {props.isShort ? (
                <p dangerouslySetInnerHTML={{ __html: props.short }} />
              ) : (
                props.copies?.map((copy, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: copy }} />
                ))
              )}
            </div>
            <footer className={s.Endorsement__footer}>
              {props.slug && (
                <div className={s.Endorsement__image}>
                  <Pilpil
                    className={s.PastCollab__image}
                    width={56}
                    height={56}
                    small={`/endorsement/${props.slug}-small.jpg`}
                    large={`/endorsement/${props.slug}.jpg`}
                    alt={props.name}
                  />
                </div>
              )}
              <cite className={s.Endorsement__cite}>
                <Button className={s.Endorsement__name} to={props.url}>
                  {props.name}
                </Button>
                {props.role?.map((roleItem, index) => (
                  <span key={index} className={s.Endorsement__role}>
                    {roleItem}
                  </span>
                ))}
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  )
}

export default Item
