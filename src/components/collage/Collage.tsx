import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import s from './Collage.module.sass'
import c from 'classnames'
import Pilpil from '../pilpil/Pilpil'

function Collage() {
  // useGSAP(() => {
  //   // console.log('Hello');
  //   gsap.to('.Collage__row', {
  //     scrollTrigger: {
  //       trigger: '.Collage__scrollable',
  //       start: 'top=',
  //       scrub: true,
  //       // markers: true,
  //     },
  //     x: -280,
  //   })
  // })

  return (
    <>
      <div className={s.Collage}>
        <div className={s.Collage__scrollable}>
          <div className={s.Collage__container}>
            <div className={s.Collage__row}>
              <div className={s.Collage__wrapper}>
                <div className={c(s.Collage__item, s.image1)}>
                  <Pilpil
                    width={410}
                    height={460}
                    small="/about/collage/sm-image1.jpg"
                    large="/about/collage/image1.jpg"
                    alt="image"
                  />
                </div>
                <div className={c(s.Collage__item, s.image2)}>
                  <Pilpil
                    width={300}
                    height={626}
                    small="/about/collage/sm-image2.jpg"
                    large="/about/collage/image2.jpg"
                    alt="image"
                  />
                </div>
                <div className={c(s.Collage__item, s.image3)}>
                  <Pilpil
                    width={300}
                    height={434}
                    small="/about/collage/sm-image3.jpg"
                    large="/about/collage/image3.jpg"
                    alt="image"
                  />
                </div>
                <div className={c(s.Collage__item, s.image4)}>
                  <Pilpil
                    width={190}
                    height={460}
                    small="/about/collage/sm-image4.jpg"
                    large="/about/collage/image4.jpg"
                    alt="image"
                  />
                </div>
                <div className={c(s.Collage__item, s.image5)}>
                  <Pilpil
                    width={370}
                    height={460}
                    small="/about/collage/sm-image5.jpg"
                    large="/about/collage/image5.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collage
