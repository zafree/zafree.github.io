import React from 'react'
import s from './BrowseMore.module.sass'
import Link from 'next/link'
import Content, { Row, Main, Left, Right } from '@/components/content/Content'

import { getWorks } from '@/api/works/getWorks'
import WorkItem from './WorkItem'
import About from '../footer/About'

function BrowseMore() {
  let allWork = getWorks()
  function getRandomElement(list: any, item: number) {
    return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, item)
  }
  const randomWork = getRandomElement(allWork, 2)
  return (
    <div className={s.Section}>
      <Content>
        <Row center>
          <Main full>
            <About />
          </Main>
        </Row>
      </Content>
      <Content>
        <Row center>
          <Main full>
            <div className={s.BrowseMore}>
              <h3 className={s.BrowseMore__title}>Browse more</h3>
              <ul className={s.BrowseMore__list}>
                {randomWork.map((work) => (
                  <li key={work.slug} className={s.BrowseMore__item}>
                    <WorkItem {...work} />
                  </li>
                ))}
              </ul>
            </div>
          </Main>
        </Row>
      </Content>
    </div>
  )
}

export default BrowseMore
