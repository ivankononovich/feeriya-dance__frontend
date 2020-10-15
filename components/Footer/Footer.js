import css from './footer.scss'
import Contacts from './../Contacts/Contacts'
import Container from './../Container/Container'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.footerContacts}>
          <div className={css.footerContacts__item}>
            <h3 className={css.footerContacts__title}>наш адрес</h3>
            <span className={css.footerContacts__text}>Ул. Есенина, 76/1 ТЦ "Максимус", 1 этаж</span>
          </div>
          <div className={css.footerContacts__item}>
            <h3 className={css.footerContacts__title}>доставка</h3>
            <span className={css.footerContacts__text}>почтой по всей Беларуси</span>
          </div>
          <div className={css.footerContacts__item}>
            <h3 className={css.footerContacts__title}>Время работы</h3>
            <span className={css.footerContacts__text}>вторник - воскресенье 10:00 - 19:00</span>
          </div>
        </div>
        <Contacts />
      </Container>
    </footer>
  )
}

export default Footer