'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getPostsSlug } from '@/api/posts/getPosts'
import { usePathname } from 'next/navigation'

import Content, { Row, Main, Left, Right } from '@/components/content/Content'
import Intro from './intro.mdx'
import Features from './features.mdx'
import Start from './start.mdx'
import StepList from './step-list.mdx'
import Step1 from './step1.mdx'
import Step2 from './step2.mdx'
import Step3 from './step3.mdx'
import Step4 from './step4.mdx'
import Step5 from './step5.mdx'
import Step6 from './step6.mdx'
import ReadMore from '@/components/posts/ReadMore'

function ReactLocally() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const post = getPostsSlug(slug)
  return (
    <>
      <Hero title={post?.title as string} subtitle={post?.subtitle} />
      <Content>
        <Row center>
          <Main>
            <Intro />
            <Features />
            <Start />
            <StepList />
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
            <Step6 />
          </Main>
        </Row>
      </Content>
      <ReadMore slug={slug} />
    </>
  )
}

export default ReactLocally
