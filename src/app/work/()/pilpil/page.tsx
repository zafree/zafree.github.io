'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'
import Content, { Main, Row } from '@/components/content/Content'
import ReadMe from './readme.mdx'

function PagePilpil() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <ReadMe />
      {/* <HeroImage>
        <Pilpil
          width={1920}
          height={960}
          small={`/work/${work?.slug}/small-cover.jpg`}
          large={`/work/${work?.slug}/cover.jpg`}
          alt={`${work?.title} cover image`}
        />
      </HeroImage>
      <Content>
        <Row center>
          <Main>
            <Pilpil
              width={2000}
              height={1446}
              small={`/work/${work?.slug}/small-cover.jpg`}
              large={`/work/${work?.slug}/image1.jpeg`}
              alt={`${work?.title} cover image`}
            />
          </Main>
        </Row>
      </Content> */}
    </>
  )
}

export default PagePilpil
