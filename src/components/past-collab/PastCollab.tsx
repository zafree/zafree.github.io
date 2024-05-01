import Image from 'next/image'
import s from './PastCollab.module.sass'

function PastCollab() {
  const n = 8
  let stars = []
  for (let i = 0; i < n; ++i) {
    stars.push(<i className="fa fa-star" key={i}></i>)
  }
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
          {Array.from({ length: 7 }, (_, i) => (
            <li className={s.PastCollab__item} key={i}>
              <div className={s.PastCollab__wrap}>
                <img
                  className={s.PastCollab__image}
                  src={'/past-collab/image' + i + '.png'}
                  loading="lazy"
                />
              </div>
            </li>
          )).reverse()}
        </ul>
        {/* <p className={s.PastCollab__footnote}><strong>Many of the projects</strong> I’ve worked on have been under NDA. That’s why I can’t share specific details about them.</p> */}
      </div>
    </div>
  )
}

export default PastCollab
