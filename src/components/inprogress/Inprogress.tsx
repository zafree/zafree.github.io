import s from './Inprogress.module.sass'

function Inprogress() {
  return (
    <div className={s.Inprogress}>
      <div className={s.Inprogress__container}>
        <div className={s.Inprogress__row}>
          <p className={s.Inprogress__copy}>
            Believe me, I’m preparing this page.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Inprogress
