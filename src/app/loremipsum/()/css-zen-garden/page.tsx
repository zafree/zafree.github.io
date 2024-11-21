'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getPostsSlug } from '@/api/posts/getPosts'
import { usePathname } from 'next/navigation'
import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'
import Post from './post.mdx'
import ReadMore from '@/components/posts/ReadMore'

function CSSZenGarden() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const post = getPostsSlug(slug)
  return (
    <>
      <Hero title={post?.title as string} subtitle={post?.subtitle} />
      <Post />
      <ReadMore />
    </>
  )
}

export default CSSZenGarden
