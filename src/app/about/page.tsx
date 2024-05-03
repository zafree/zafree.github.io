import { Metadata } from 'next'
import Hero from '@/components/hero/Hero'
import Content, { Main, Row } from '@/components/content/Content'
import Pilpil from '@/components/pilpil/Pilpil'

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
    </>
  )
}

export default About
