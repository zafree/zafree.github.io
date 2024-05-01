'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import Content, { Copies, Links, Row } from '@/components/content/Content'
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

function ReactLocally() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <Content>
        <Row center>
          <Copies>
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
          </Copies>
        </Row>
      </Content>
    </>
  )
}

export default ReactLocally
