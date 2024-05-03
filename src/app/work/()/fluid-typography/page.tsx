'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import Pilpil from '@/components/pilpil/Pilpil'
import Content, { Main, Row } from '@/components/content/Content'

function FluidTypography() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <Post />
      <Content>
        <Row center>
          <Main>
            <Pilpil
              width={640}
              height={320}
              small={`/work/${work?.slug}/thumb-small.jpg`}
              large={`/work/${work?.slug}/cover.jpg`}
              alt={`${work?.title} cover image`}
            />
          </Main>
        </Row>
      </Content>
    </>
  )
}

export default FluidTypography
