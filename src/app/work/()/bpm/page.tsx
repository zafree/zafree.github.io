'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import Content, { Row } from '@/components/content/Content'

import Intro from './intro.mdx'
import WebDesign from './web-design.mdx'
import BUBTAwesome from './bubt-awesome.mdx'
import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'
import BrowseMore from '@/components/works/BrowseMore'

function BPM() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <HeroImage>
        <Pilpil
          width={1920}
          height={960}
          small={`/work/${work?.slug}/cover-small.jpg`}
          large={`/work/${work?.slug}/cover.jpg`}
          alt={`${work?.title} cover image`}
        />
      </HeroImage>
      <Intro />
      <WebDesign />
      <BUBTAwesome />
      <BrowseMore />
    </>
  )
}

export default BPM
