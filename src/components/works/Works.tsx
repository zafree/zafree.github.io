import React from 'react'
import s from './Works.module.sass'
import Link from 'next/link'
import WorkItem from './WorkItem'
import { getWorks } from '@/api/works/getWorks'
function Works() {
  let allWork = getWorks()
  return (
    <div className={s.Works}>
      <div className={s.Works__container}>
        <div className={s.Works__row}>
          <ul className={s.Works__list}>
            {allWork.map((work) => (
              <li key={work.slug} className={s.Works__item}>
                <WorkItem {...work} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Works
