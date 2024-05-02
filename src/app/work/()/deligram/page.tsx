'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'

import Image from 'next/image'
import HeroImage from '@/components/hero-image/HeroImage'

import s from './Deligram.module.sass'

import Intro from './intro.mdx'

function Deligram() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <HeroImage>
        <Image
          width={1920}
          height={960}
          src={`/work/${work?.slug}/cover.jpg`}
          alt={`${work?.title} cover image`}
        />
      </HeroImage>
      <Intro />
    </>
  )
}

export default Deligram
