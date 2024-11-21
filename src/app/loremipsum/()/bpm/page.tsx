'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getPostsSlug } from '@/api/posts/getPosts'
import { usePathname } from 'next/navigation'
import Content, { Row } from '@/components/content/Content'

import Intro from './intro.mdx'
import WebDesign from './web-design.mdx'
import BUBTAwesome from './bubt-awesome.mdx'
import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'
import ReadMore from '@/components/posts/ReadMore'

function BPM() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const post = getPostsSlug(slug)
  return (
    <>
      <Hero title={post?.title as string} subtitle={post?.subtitle} />
      <HeroImage>
        <Pilpil
          width={1280}
          height={640}
          small={`${url}/cover-small.jpg`}
          large={`${url}/cover.jpg`}
          alt={`${post?.title} cover image`}
        />
      </HeroImage>
      <Intro />
      <WebDesign />
      <BUBTAwesome />
      <ReadMore />
    </>
  )
}

export default BPM
