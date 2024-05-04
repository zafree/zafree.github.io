import React from 'react'
import {
  getEndorsements,
  getEndorsementsSlug,
} from '@/api/endorsement/getEndorsements'
import Item from './Item'
import s from './Endorsement.module.sass'
import Button from '../button/Button'

export function MoreEndorsement() {
  return (
    <>
      <div className={s.More}>
        <div className={s.More__container}>
          <div className={s.More__inner}>
            <Button className={s.More__link} to="/endorsements">
              More Endorsements
            </Button>
            <p className={s.More__copy}>
              Amazing things people have said about working with me.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function Endorsement({
  load,
  loadList,
}: {
  load?: string
  loadList?: boolean
}) {
  const allEndorsements = getEndorsements()
  const len = allEndorsements.length
  const loadRandom = allEndorsements[Math.floor(Math.random() * len)]
  const loadTarget = getEndorsementsSlug(load as any)
  return (
    <>
      {loadList ? (
        <ul className={s.List}>
          {allEndorsements.map((endorsement) => (
            <li className={s.List__item} key={endorsement.id}>
              <Item {...endorsement} />
            </li>
          ))}
        </ul>
      ) : load ? (
        <Item isShort {...(loadTarget as any)} />
      ) : (
        <Item isShort {...loadRandom} />
      )}
    </>
  )
}

export default Endorsement
