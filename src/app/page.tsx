'use client'

import { useEffect } from 'react'
import Brace from '@/components/brace/Brace'
import Hero from '@/components/hero/Hero'

import s from './page.module.sass'
import Intro from '@/components/Intro/intro'
function Home() {
  return (
    <>
      <Hero
        title="Independent Design Engineer"
        subtitle="Hi, I’m Zafree, and I specialize in design, and design implementation.">
        <Brace />
      </Hero>
      <div className="box"></div>
    </>
  )
}

export default Home
