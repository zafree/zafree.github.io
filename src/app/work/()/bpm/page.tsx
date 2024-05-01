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
import Image from 'next/image'

function BPM() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <HeroImage>
        <Image
          width={1280}
          height={640}
          src={`/work/${work?.slug}/cover.jpg`}
          alt="BUBT Profession Meetup 2016 Cover"
        />
      </HeroImage>
      <Content>
        <Intro />
        <WebDesign />
        <BUBTAwesome />
      </Content>
    </>
  )
}

export default BPM
