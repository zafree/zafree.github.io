'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import Image from 'next/image'

function FluidTypography() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <Post />
      <Image
        width={640}
        height={320}
        src={`/work/${work?.slug}/cover.jpg`}
        alt={`${work?.title} cover image`}
      />
    </>
  )
}

export default FluidTypography
