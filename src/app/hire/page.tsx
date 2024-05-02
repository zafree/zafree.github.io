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
      <Hero kicker="Hire me" title="I’m a design-minded front-end developer.">
        <h2 className={s.Hire__subheading}>
          Also called{' '}
          <Button to="https://bradfrost.com/blog/post/frontend-design/">
            front-end designer
          </Button>
          , UI developers, UI engineer, or{' '}
          <Button to="https://snook.ca/archives/opinion/design-engineering">
            design engineer
          </Button>
          .
        </h2>
        <p className={s.Hire__copy}>
          As a <em>[choose one of the above titles]</em>, I work on the{' '}
          <Button to="https://bradfrost.com/blog/post/frontend-design/">
            front-end of the front-end
          </Button>
          . That is, my work lies at the intersection of design and back-end.
        </p>
      </Hero>
      <Tldr />
    </>
  )
}

export default Hire
