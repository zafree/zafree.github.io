import Brace from '@/components/brace/Brace'
import Hero from '@/components/hero/Hero'

import s from './page.module.sass'
import PastCollab from '@/components/past-collab/PastCollab'
import Endorsement, {
  MoreEndorsement,
} from '@/components/endorsements/Endorsement'
import { GoogleAnalytics } from '@next/third-parties/google'

function Home() {
  return (
    <>
      <GoogleAnalytics gaId="G-WHMPP1NQK9" />
      <Hero
        title="Independent Design Engineer"
        subtitle="Hi, I’m Zafree, and I specialize in design, and design implementation."
      >
        <Brace />
      </Hero>
      <PastCollab />
      <Endorsement />
      <MoreEndorsement />
    </>
  )
}

export default Home
