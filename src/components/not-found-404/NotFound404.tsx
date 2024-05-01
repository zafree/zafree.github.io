import s from './NotFound404.module.sass'

function NotFound404() {
  return (
    <div className={s.NotFound}>
      <div className={s.NotFound__container}>
        <div className={s.NotFound__row}>
          <h1 className={s.NotFound__heading}>404 - Page Not Found</h1>
          <p className={s.NotFound__subheading}>
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound404
