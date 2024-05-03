'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'

function PagePilpil() {
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
          small={`/work/${work?.slug}/small-cover.jpg`}
          large={`/work/${work?.slug}/cover.jpg`}
          alt={`${work?.title} cover image`}
        />
      </HeroImage>
      {/* <Post /> */}
    </>
  )
}

export default PagePilpil
