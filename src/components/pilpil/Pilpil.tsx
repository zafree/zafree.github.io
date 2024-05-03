'use client'

import { useEffect, useRef, useState } from 'react'
// import { useIntersectionObserver } from './useIntersectionObserver'

import { IPilpil } from '@/api/interface/IPilpil'

import c from 'classnames'
import s from './Pilpil.module.sass'

function useIntersectionObserver(ref: any, src: any) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const imageDiv = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        // console.log('entry: ', entry.target)

        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting) {
          const el = new Image()
          entry.target.appendChild(el)
          el.classList.add(s.Image__image)
          el.src = src
          el.onload = () => {
            setTimeout(() => {
              el.classList.add(s.loaded)
            }, 300)
          }
          observer.unobserve(imageDiv)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    )
    observer.observe(imageDiv)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}

function Pilpil(props: IPilpil) {
  const imageRef = useRef<HTMLDivElement>(null)
  const imageSrc = props.large
  const aspectRatio = (props.height / props.width) * 100

  useIntersectionObserver(imageRef, imageSrc)

  // // canvas thumbnail
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvas, setCanvas] = useState()
  const canvasWidth = 30
  const canvasHeight = (props.height / props.width) * canvasWidth

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      if (context === null) return
      let imageThumbnail: any = new Image()
      imageThumbnail.src = props.small
      // setCanvas(s.loading as any)
      imageThumbnail.onload = () => {
        drawImage(imageThumbnail)
        blurImage(2)
        setCanvas(s.loaded as any)
      }
      // canvas function
      const drawImage = (image: any) => {
        canvas.width = image.width
        canvas.height = image.height
        context.drawImage(image, 0, 0)
      }
      // blur function
      const blurImage = (e: number) => {
        context.globalAlpha = 0.5
        for (let t = -e; t <= e; t += 2) {
          for (let n = -e; n <= e; n += 2) {
            context.drawImage(canvas, n, t)
            if (n >= 0 && t >= 0) {
              context.drawImage(canvas, -(n - 1), -(t - 1))
            }
          }
        }
      }
    }
  }, [])

  return (
    <>
      <figure className={s.figure}>
        <div
          ref={imageRef}
          className={c(s.Image, props.className && props.className)}
        >
          <div
            className={s.Image__aspectRatio}
            style={{ paddingBottom: aspectRatio + '%' }}
          ></div>
          <canvas
            ref={canvasRef}
            className={c(s.Image__canvas, canvas)}
            width={canvasWidth}
            height={canvasHeight}
          ></canvas>
        </div>
        {props.caption && (
          <figcaption className={s.figure__caption}>{props.caption}</figcaption>
        )}
      </figure>
    </>
  )
}

export default Pilpil
