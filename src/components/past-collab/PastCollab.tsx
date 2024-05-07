import s from './PastCollab.module.sass'
import { getLogos } from '@/api/past-collab/getLogos'
import Pilpil from '@/components/pilpil/Pilpil'

function PastCollab() {
  const allLogos = getLogos()
  return (
    <div className={s.PastCollab}>
      <div className={s.PastCollab__container}>
        <div className={s.PastCollab__header}>
          <h2 className={s.PastCollab__title}>Past collaborations</h2>
          <p className={s.PastCollab__copy}>
            A rollercoaster ride: victories, oopsies, and lessons in between.
          </p>
        </div>
        <ul className={s.PastCollab__list} role="list">
          {allLogos.map(
            (logo) =>
              logo.status && (
                <li className={s.PastCollab__item} key={logo.id}>
                  <div
                    className={s.PastCollab__wrap}
                    style={{ width: logo.width + 'px' }}
                  >
                    <Pilpil
                      width={logo.width}
                      height={56}
                      small={`/past-collab/${logo.image}-small.jpg`}
                      large={`/past-collab/${logo.image}.jpg`}
                      alt={logo.company}
                    />
                  </div>
                </li>
              )
          )}
        </ul>
        {/* <p className={s.PastCollab__footnote}><strong>Many of the projects</strong> I’ve worked on have been under NDA. That’s why I can’t share specific details about them.</p> */}
      </div>
    </div>
  )
}

export default PastCollab
