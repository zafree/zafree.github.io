import { IHero } from '@/api/interface/IHero'
import s from './Hero.module.sass'

function Hero(props: IHero) {
  return (
    <>
      <div className={s.Hero}>
        <div className={s.Hero__container}>
          <div className={s.Hero__row}>
            {props.kicker && (
              <div className={s.Hero__kicker}>{props.kicker}</div>
            )}
            <h1
              className={s.Hero__heading}
              dangerouslySetInnerHTML={{ __html: props.title }}
            />
            {props?.subtitle && (
              <h2
                className={s.Hero__subheading}
                dangerouslySetInnerHTML={{ __html: props.subtitle }}
              />
            )}
            {props.copy?.map((copyItem, index) => (
              <p
                className={s.Hero__copy}
                key={index}
                dangerouslySetInnerHTML={{ __html: copyItem }}
              />
            ))}
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
