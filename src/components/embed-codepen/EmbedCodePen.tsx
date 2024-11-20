'use client'
import React from 'react'
import Iframe from 'react-iframe'
import s from './EmbedCodePen.module.sass'
const EmbedCodePen = (props: { author: any; slug: any }) => {
  const { author, slug } = props
  // example https://codepen.io/chrisgannon/pen/LYXLqpx
  // here author is chrisgannon and slug is LYXLqpx
  return (
    <>
      <div className={s.EmbedCodePen}>
        <div className={s.EmbedCodePen__aspectRatio}></div>
        <div className={s.EmbedCodePen__content}>
          <Iframe
            url={`https://codepen.io/${author}/embed/${slug}?default-tab=result&editable=true&theme-id=dark`}
            width="100%"
            height="450px"
            loading="lazy"
            id="myId"
            className="EmbedCodePen"
            display="initial"
            position="relative"
            allowFullScreen={true}
          />
        </div>
      </div>
    </>
  )
}

/* 
preloaded class css code:
.preloaded {
  background: linear-gradient(to right, #eee 8%, #e1e1e1 18%, #eee 33%);
  background-size: 200% 50px;
  animation: preloadAnimation 2s infinite;
}

@keyframes preloadAnimation {
  from {
    background-position: -280px 0;
  }

  to {
    background-position: 300px 0;
  }
}
*/

export default EmbedCodePen
