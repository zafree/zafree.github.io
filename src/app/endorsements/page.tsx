import { Metadata } from 'next'
import Hero from '@/components/hero/Hero'
import Button from '@/components/button/Button'

import s from './Hire.module.sass'

import Tldr from './tldr.mdx'
import Endorsement from '@/components/endorsements/Endorsement'

export const metadata: Metadata = {
  title: 'Endorsements. Zafree.',
  description: '',
}

function Endorsements() {
  return (
    <>
      <Hero
        kicker={'Endorsements'}
        title={'They said about me'}
        subtitle={'Clients and collaborators working with me.'}
        copy={[
          'I’ve been completely blessed over my career to have worked with some amazing people on very exciting projects. Here’s a few things some of my clients and collaborators have said about working with me.',
        ]}
      />
      <Endorsement loadList />
    </>
  )
}

export default Endorsements
