'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'

import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'

import s from './Deligram.module.sass'

import Intro from './intro.mdx'
import Inprogress from '@/components/inprogress/Inprogress'
import Endorsement from '@/components/endorsements/Endorsement'

function Deligram() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <HeroImage>
        <Pilpil
          width={1920}
          height={840}
          small={`/work/${work?.slug}/cover-small.jpg`}
          large={`/work/${work?.slug}/cover.jpg`}
          alt={`${work?.title} cover image`}
        />
      </HeroImage>
      <Intro />
      <Endorsement load="jituboss" />
      <Inprogress />
    </>
  )
}

export default Deligram
