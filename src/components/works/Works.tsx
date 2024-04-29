import React from 'react'
import s from './Works.module.sass'
import Link from 'next/link'
import { allWorks } from '@/api/works/getWorks'
import WorkItem from './WorkItem'
function Works() {
  let works = allWorks()
  return (
    <div className={s.Works}>
      <div className={s.Works__container}>
        <div className={s.Works__row}>
          <ul className={s.Works__list}>
            {works.map((post) => (
              <li key={post.slug} className={s.Works__item}>
                <WorkItem {...post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Works
