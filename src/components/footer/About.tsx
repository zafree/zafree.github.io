import React from 'react'
import s from './About.module.sass'
import Link from 'next/link'

function About() {
  return (
    <div className={s.About}>
      <div className={s.About__avatar}></div>

      <div className={s.About__titleWrap}>
        <h5 className={s.About__name}>Zafree, available for hire</h5>
        <Link className={s.About__hire} href="/hire">
          Hire me
        </Link>
      </div>
      <div className={s.About__bio}>
        I’m a designer who codes, very much focused on design, and design
        implementation. I like to work with the core technologies such as HTML,
        CSS, JavaScript, but there’s a good chance I’m using the latest
        frameworks like React, React-native, or any.
      </div>
    </div>
  )
}

export default About
