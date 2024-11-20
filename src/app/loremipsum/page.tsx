import { Metadata } from 'next'
import Hero from '@/components/hero/Hero'
import Posts from '@/components/posts/Posts'
import Content, { Main, Row } from '@/components/content/Content'

import Intro from './intro.mdx'

export const metadata: Metadata = {
  title: 'Lorem ipsum by Zafree.',
  description: '',
}

function LoremIpsum() {
  return (
    <>
      <Hero
        kicker={'Lorem ipsum'}
        title={'Lorem ipsum'}
        subtitle={'Words, mostly. By me, and myself.'}
      />
      <Posts />
    </>
  )
}

export default LoremIpsum
