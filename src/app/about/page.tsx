import { Metadata } from 'next'
import Hero from '@/components/hero/Hero'

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
      <div className="box"></div>
    </>
  )
}

export default About
