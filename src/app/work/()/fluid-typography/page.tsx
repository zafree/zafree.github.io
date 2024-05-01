'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import Content, { Row, Copies, Links } from '@/components/content/Content'

function FluidTypography() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <Content>
        <Row>
          <Copies center>
            <Post />
          </Copies>
        </Row>
      </Content>
    </>
  )
}

export default FluidTypography
