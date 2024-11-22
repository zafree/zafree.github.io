'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getPostsSlug } from '@/api/posts/getPosts'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'
import Content, { Main, Row } from '@/components/content/Content'
import ReadMe from './readme.mdx'
import ReadMore from '@/components/posts/ReadMore'

function PagePilpil() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const post = getPostsSlug(slug)
  return (
    <>
      <Hero title={post?.title as string} subtitle={post?.subtitle} />
      <ReadMe />
      <ReadMore />
    </>
  )
}

export default PagePilpil
