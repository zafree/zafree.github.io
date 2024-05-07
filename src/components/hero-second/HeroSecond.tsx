import { IHero } from '@/api/interface/IHero'
import c from 'classnames'
import s from './HeroSecond.module.sass'

function HeroSecond(props: IHero) {
  return (
    <div className={c(s.HeroSecond, props?.className && props.className)}>
      <h3 className={s.HeroSecond__heading}>{props.title}</h3>
      <h4 className={s.HeroSecond__subheading}>{props.subtitle}</h4>
      {props.copy?.map((copyItem, index) => (
        <p
          className={s.HeroSecond__copy}
          key={index}
          dangerouslySetInnerHTML={{ __html: copyItem }}
        />
      ))}
    </div>
  )
}

export default HeroSecond
