import { Metadata } from 'next'
import Hero from '@/components/hero/Hero'
import Content, { Main, Row } from '@/components/content/Content'
import Pilpil from '@/components/pilpil/Pilpil'
import Collage from '@/components/collage/Collage'

import Intro from './intro.mdx'
import Inprogress from '@/components/inprogress/Inprogress'

export const metadata: Metadata = {
  title: 'About. Zafree.',
  description: '',
}

function About() {
  return (
    <>
      <Hero
        kicker={'About me'}
        title={'I’m Zafree.'}
        subtitle={'Glad you’re stalking me finally'}
      />
      <Collage />
      <Intro />
      <Inprogress />
    </>
  )
}

export default About
