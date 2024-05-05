import s from './Inprogress.module.sass'

function Inprogress() {
  return (
    <div className={s.Inprogress}>
      <div className={s.Inprogress__container}>
        <div className={s.Inprogress__row}>
          <h1 className={s.Inprogress__heading}>Inprogress</h1>
          <p className={s.Inprogress__subheading}>
            Believe me, I’m preparing this case study.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Inprogress
