import React from 'react'
import s from './BrowseMore.module.sass'
import Link from 'next/link'
import Content, { Row, Main, Left, Right } from '@/components/content/Content'

import { getMoreWorks } from '@/api/works/getWorks'
import WorkItem from './WorkItem'
import About from '../footer/About'
import { usePathname } from 'next/navigation'

function BrowseMore() {
  let url = usePathname()
  let slug = url.substring(url.lastIndexOf('/') + 1)
  let moreWorks = getMoreWorks(slug)
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
                {moreWorks.map((work) => (
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
