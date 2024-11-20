import React from 'react'
import s from './Posts.module.sass'
import Link from 'next/link'
import PostItem from './PostItem'
import { getPosts } from '@/api/posts/getPosts'
function Posts() {
  let allPost = getPosts()
  return (
    <div className={s.Works}>
      <div className={s.Works__container}>
        <div className={s.Works__row}>
          <ul className={s.Works__list}>
            {allPost.map((post) => (
              <li key={post.slug} className={s.Works__item}>
                <PostItem {...post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Posts
