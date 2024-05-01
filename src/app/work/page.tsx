import Hero from '@/components/hero/Hero'
import Works from '@/components/works/Works'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work. Zafree.',
  description: '',
}

function Work() {
  return (
    <>
      <Hero
        kicker="My work"
        title="Insights into my work"
        subtitle="Such panic zone"
      />
      <Works />
    </>
  )
}

export default Work
