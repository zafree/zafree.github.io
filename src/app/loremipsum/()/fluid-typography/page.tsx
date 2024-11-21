'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getPostsSlug } from '@/api/posts/getPosts'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import Pilpil from '@/components/pilpil/Pilpil'
import Content, { Main, Row } from '@/components/content/Content'
import ReadMore from '@/components/posts/ReadMore'

function FluidTypography() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const post = getPostsSlug(slug)
  return (
    <>
      <Hero title={post?.title as string} subtitle={post?.subtitle} />
      <Post />
      <Content>
        <Row center>
          <Main>
            <Pilpil
              width={640}
              height={320}
              small={`/loremipsum/${post?.slug}/thumb-small.jpg`}
              large={`/loremipsum/${post?.slug}/cover.jpg`}
              alt={`${post?.title} cover image`}
            />
          </Main>
        </Row>
      </Content>
      <ReadMore slug={slug} />
    </>
  )
}

export default FluidTypography
