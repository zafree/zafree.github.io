import { IHeroImage } from '@/api/interface/IHeroImage'
import s from './HeroImage.module.sass'

function HeroImage(props: IHeroImage) {
  return (
    <>
      <div className={s.HeroImage}>
        <div className={s.HeroImage__container}>
          <div className={s.HeroImage__row}>{props.children}</div>
        </div>
      </div>
    </>
  )
}

export default HeroImage
