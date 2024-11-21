'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getPostsSlug } from '@/api/posts/getPosts'
import { usePathname } from 'next/navigation'
import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'
import PmiBangladesh from './PmiBangladesh.mdx'
import Endorsement from '@/components/endorsements/Endorsement'
import ReadMore from '@/components/posts/ReadMore'

function PagePilpil() {
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
          small={`/loremipsum/${post?.slug}/small-thumb.jpg`}
          large={`/loremipsum/${post?.slug}/cover.jpg`}
          alt={`${post?.title} cover image`}
        />
      </HeroImage>
      <PmiBangladesh />
      {/* <Endorsement load="shafiq" /> */}
      <ReadMore />
    </>
  )
}

export default PagePilpil
