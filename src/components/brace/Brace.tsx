'use client'

import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from 'gsap/TextPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, TextPlugin)
}

import s from './Brace.module.sass'
function Brace() {
  useGSAP(() => {
    const words = ['love', 'dig', 'know', 'do', 'fucking love']
    let tlMaster = gsap.timeline({ repeat: -1 })
    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 })
      tl.to('#love', { duration: 1, text: word })
      tlMaster.add(tl)
    })
  })

  return (
    <div className={s.Brace}>
      <svg
        className={s.Brace__icon}
        viewBox="0 0 18 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.6799 51.4733H13.8466C9.29326 51.4733 5.59326 47.7667 5.59326 43.22V32.2533C5.59326 29.1733 3.08659 26.6667 0.0065918 26.6667V24C3.08659 24 5.59326 21.4933 5.59326 18.4133V8.26667C5.58659 3.70667 9.29326 0 13.8466 0H17.6799V2.66667H13.8466C10.7666 2.66667 8.25993 5.17333 8.25993 8.25333V18.4C8.25993 21.2933 6.75993 23.8467 4.49993 25.32C6.75993 26.7933 8.25993 29.3467 8.25993 32.24V43.2067C8.25993 46.2867 10.7666 48.7933 13.8466 48.7933H17.6799V51.4733Z" />
      </svg>
      <p className={s.Brace__label}>
        I <span id="love">love</span> design
      </p>
      <svg
        className={s.Brace__icon}
        viewBox="0 0 18 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.32007 0.52667L4.1534 0.52667C8.70674 0.526669 12.4067 4.23333 12.4067 8.78L12.4067 19.7467C12.4067 22.8267 14.9134 25.3333 17.9934 25.3333L17.9934 28C14.9134 28 12.4067 30.5067 12.4067 33.5867L12.4067 43.7333C12.4134 48.2933 8.70674 52 4.15341 52L0.320074 52L0.320074 49.3333L4.15341 49.3333C7.23341 49.3333 9.74007 46.8267 9.74007 43.7467L9.74007 33.6C9.74007 30.7067 11.2401 28.1533 13.5001 26.68C11.2401 25.2067 9.74007 22.6533 9.74007 19.76L9.74007 8.79334C9.74007 5.71334 7.2334 3.20667 4.1534 3.20667L0.32007 3.20667L0.32007 0.52667Z" />
      </svg>
    </div>
  )
}

export default Brace
