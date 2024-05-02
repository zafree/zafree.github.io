'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import Content, { Row, Main, Left, Right } from '@/components/content/Content'
import Image from 'next/image'
import HeroImage from '@/components/hero-image/HeroImage'

import s from './Deligram.module.sass'

function Deligram() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      {/* <HeroImage>
        <Image
          width={1920}
          height={840}
          src={`/work/${work?.slug}/cover.jpg`}
          alt={`${work?.title} cover image`}
        />
      </HeroImage> */}
      <Content>
        <Row>
          <Main>Main</Main>
          {/* <Left>
            ## What I do

            Web design<br />
            Prototype<br />
            Web development<br />
            Front-end<br />
            Markup<br />
            Sass
          </Left> */}
          {/* <Right></Right> */}
        </Row>
      </Content>
      {/* <div className={s.TextBlock}>
        <div className={s.TextBlock__container}>
          <div className={s.TextBlock__row}>
            <div className={s.TextBlock__colLeft}>left</div>
            <div className={s.TextBlock__colRight}>right</div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Deligram
