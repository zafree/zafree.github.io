import { Metadata } from 'next'
import Hero from '@/components/hero/Hero'
import Button from '@/components/button/Button'

import s from './Hire.module.sass'

import Tldr from './tldr.mdx'

export const metadata: Metadata = {
  title: 'Hire. Zafree.',
  description: '',
}

function Hire() {
  return (
    <>
      <Hero kicker="Hire me" title="I’m a dev-minded designer.">
        <h2 className={s.Hire__subheading}>
          Also called{' '}
          <Button to="https://bradfrost.com/blog/post/frontend-design/">
            Front-End Designer
          </Button>
          , UX Engineer, or{' '}
          <Button to="https://snook.ca/archives/opinion/design-engineering">
            Design Engineer
          </Button>
          .
        </h2>
      </Hero>
      <Tldr />
    </>
  )
}

export default Hire
