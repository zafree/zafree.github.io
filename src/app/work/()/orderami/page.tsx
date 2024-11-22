'use client'

import React from 'react'
import Hero from '@/components/hero/Hero'
import { getWorksSlug } from '@/api/works/getWorks'
import { usePathname } from 'next/navigation'
import Post from './post.mdx'
import HeroImage from '@/components/hero-image/HeroImage'
import Pilpil from '@/components/pilpil/Pilpil'
import Content, { Main, Row } from '@/components/content/Content'
import s from './Orderami.module.sass'
import c from 'classnames'
import BrowseMore from '@/components/works/BrowseMore'
import Link from 'next/link'

function Orderami() {
  const url = usePathname()
  const slug = url.substring(url.lastIndexOf('/') + 1)
  const work = getWorksSlug(slug)
  return (
    <>
      <Hero title={work?.title as string} subtitle={work?.subtitle} />
      <HeroImage>
        <div className={s.video}>
          <div className={s.video__aspectRatio}></div>
          <video
            muted
            loop
            playsInline
            autoPlay
            crossOrigin="anonymous"
            className={s.video__video}
            src={`${url}/cover.mp4`}
          ></video>
        </div>
      </HeroImage>
      <Post />
      <Content>
        <Row center>
          <Main>
            <div className={s.demo}>
              <Link
                className={s.demo__link}
                href="https://sushitei.orderami.com/"
                target="_blank"
              >
                <Pilpil
                  width={100}
                  height={100}
                  small={`${url}/demo/demo1-small.jpg`}
                  large={`${url}/demo/demo1.jpg`}
                  alt="Sushi Tei"
                  caption="Sushi Tei"
                />
              </Link>
              <Link
                className={s.demo__link}
                href="https://tabaq.orderami.com/"
                target="_blank"
              >
                <Pilpil
                  width={100}
                  height={100}
                  small={`${url}/demo/demo2-small.jpg`}
                  large={`${url}/demo/demo2.jpg`}
                  alt="Tabaq"
                  caption="Tabaq"
                />
              </Link>
              <Link
                className={s.demo__link}
                href="https://dofdhk.orderami.com/"
                target="_blank"
              >
                <Pilpil
                  width={100}
                  height={100}
                  small={`${url}/demo/demo3-small.jpg`}
                  large={`${url}/demo/demo3.jpg`}
                  alt="Dumplings of Fury"
                  caption="Dumplings of Fury"
                />
              </Link>
              <Link
                className={s.demo__link}
                href="https://beirut99.orderami.com/"
                target="_blank"
              >
                <Pilpil
                  width={100}
                  height={100}
                  small={`${url}/demo/demo4-small.jpg`}
                  large={`${url}/demo/demo4.jpg`}
                  alt="Beirut 99"
                  caption="Beirut 99"
                />
              </Link>
              <Link
                className={s.demo__link}
                href="https://laughing-buddha.orderami.com/"
                target="_blank"
              >
                <Pilpil
                  width={100}
                  height={100}
                  small={`${url}/demo/demo5-small.jpg`}
                  large={`${url}/demo/demo5.jpg`}
                  alt="Laughing Buddha"
                  caption="Laughing Buddha"
                />
              </Link>
              <div className={c(s.demo__link, s.more)}>+5</div>
            </div>
          </Main>
        </Row>
      </Content>
      <BrowseMore />
    </>
  )
}

export default Orderami
