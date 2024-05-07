'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'
import PmiBangladesh from './PmiBangladesh.mdx'
import Endorsement from '@/components/endorsements/Endorsement'

function PagePilpil() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <HeroImage>
        <Pilpil
          width={1280}
          height={640}
          small={`/work/${work?.slug}/small-thumb.jpg`}
          large={`/work/${work?.slug}/cover.jpg`}
          alt={`${work?.title} cover image`}
        />
      </HeroImage>
      <PmiBangladesh />
      <Endorsement load="shafiq" />
    </>
  )
}

export default PagePilpil
