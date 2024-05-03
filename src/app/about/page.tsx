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
      <Content>
        <Row center>
          <Main>
            <div style={{ height: '700px', border: '1px solid red' }}></div>
            <Pilpil
              width={3820}
              height={2762}
              small="/pilpil/small1.jpeg"
              large="/pilpil/image1.jpeg"
              alt="image1"
            />
            <Pilpil
              width={3937}
              height={2625}
              small="/pilpil/small2.jpeg"
              large="/pilpil/image2.png"
              alt="image2"
            />
            <Pilpil
              width={2000}
              height={1661}
              small="/pilpil/small3.jpeg"
              large="/pilpil/image3.jpeg"
              alt="image3"
            />
          </Main>
        </Row>
      </Content>
    </>
  )
}

export default About
