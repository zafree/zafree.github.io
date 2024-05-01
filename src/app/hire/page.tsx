import { Metadata } from 'next'
import Hero from '@/components/hero/Hero'
import Link from 'next/link'

import s from './Hire.module.sass'
import Content, { Copies, Links, Row } from '@/components/content/Content'

import Title from './title.mdx'

import Copies1 from './copies1.mdx'
import Copies2 from './copies2.mdx'
import Copies3 from './copies3.mdx'
import Copies4 from './copies4.mdx'

import Links1 from './links1.mdx'
import Links2 from './links2.mdx'
import Links3 from './links3.mdx'
import Separator from '@/components/separator/Separator'
import Button from '@/components/button/Button'

export const metadata: Metadata = {
  title: 'About. Zafree.',
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
      <Content>
        <Row>
          <Title />
        </Row>
        <Row flex>
          <Copies>
            <Copies1 />
          </Copies>
          <Links>
            <Links1 />
          </Links>
        </Row>
        <Row flex>
          <Copies>
            <Copies2 />
          </Copies>
          <Links>
            <Links2 />
          </Links>
        </Row>
        <Separator />
        <Row flex>
          <Copies>
            <Copies3 />
          </Copies>
          <Links>
            <Links3 />
          </Links>
        </Row>
        <Separator />
        <Row>
          <Copies4 />
        </Row>
      </Content>
    </>
  )
}

export default Hire
