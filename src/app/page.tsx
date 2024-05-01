import Brace from '@/components/brace/Brace'
import Hero from '@/components/hero/Hero'

import s from './page.module.sass'
import PastCollab from '@/components/past-collab/PastCollab'
function Home() {
  return (
    <>
      <Hero
        title="Independent Design Engineer"
        subtitle="Hi, I’m Zafree, and I specialize in design, and design implementation."
      >
        <Brace />
      </Hero>

      <PastCollab />
    </>
  )
}

export default Home
