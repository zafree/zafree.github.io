import React from 'react'
import s from './ReadMore.module.sass'
import Content, { Row, Main, Left, Right } from '@/components/content/Content'
import { usePathname } from 'next/navigation'
import { getMorePosts } from '@/api/posts/getPosts'
import PostItem from './PostItem'
import About from '../footer/About'

function ReadMore() {
  let url = usePathname()
  let slug = url.substring(url.lastIndexOf('/') + 1)
  let morePosts = getMorePosts(slug)
  // function getRandomPosts(list: any, item: number) {
  //   return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, item)
  // }
  // let randomPosts = getRandomPosts(morePosts, 4)
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
                {morePosts.map((post) => (
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
