'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getPostsSlug } from '@/api/posts/getPosts'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import ReadMore from '@/components/posts/ReadMore'
import EmbedCodePen from '@/components/embed-codepen/EmbedCodePen'

function StickyKitProblem() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const post = getPostsSlug(slug)
  return (
    <>
      <Hero title={post?.title as string} subtitle={post?.subtitle} />
      <Post />
      {/* <EmbedCodePen author="zafree" slug="MJGzER" /> */}
      <ReadMore />
    </>
  )
}

export default StickyKitProblem
