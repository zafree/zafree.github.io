import React from 'react'
import s from './ReadMore.module.sass'
import Link from 'next/link'
import Content, { Row, Main, Left, Right } from '@/components/content/Content'

import { getPosts } from '@/api/posts/getPosts'
import PostItem from './PostItem'
import About from '../footer/About'

function ReadMore() {
  let allPost = getPosts()
  function getRandomElement(list: any, item: number) {
    return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, item)
  }
  const randomPost = getRandomElement(allPost, 4)
  return (
    <div className={s.Section}>
      <Content>
        <Row center>
          <Main full>
            <About />
          </Main>
        </Row>
      </Content>
      {/* list */}
      <Content>
        <Row center>
          <Main full>
            <div className={s.ReadMore}>
              <h3 className={s.ReadMore__title}>Read more</h3>
              <ul className={s.ReadMore__list}>
                {randomPost.map((post) => (
                  <li key={post.slug} className={s.ReadMore__item}>
                    <PostItem {...post} />
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

export default ReadMore
