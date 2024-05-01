import s from './Footer.module.sass'

function Footer() {
  return (
    <footer className={s.Footer}>
      <div className={s.Footer__container}>
        <div className={s.Footer__copyright}>
          <p>© Zafree 2013–Today.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
