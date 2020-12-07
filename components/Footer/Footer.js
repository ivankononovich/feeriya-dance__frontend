import css from './footer.scss'
import Container from './../Container/Container'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.footerContacts}>
          <div className={css.footerContacts__item}>
            <h3 className={css.footerContacts__title}>наш адрес</h3>
            <span className={css.footerContacts__text}>
              Ул. Есенина, 76/1 ТЦ "Максимус", 1 этаж
            </span>
          </div>
          <div className={css.footerContacts__item}>
            <h3 className={css.footerContacts__title}>доставка</h3>
            <span className={css.footerContacts__text}>
              почтой по всей Беларуси
            </span>
          </div>
          <div className={css.footerContacts__item}>
            <h3 className={css.footerContacts__title}>Время работы</h3>
            <span className={css.footerContacts__text}>
              вторник - воскресенье 10:00 - 19:00
            </span>
          </div>
        </div>
      </Container>
      <div style={{ color: 'red' }}>Оплата</div>
      <div className={css.ownerInfo}>
        <Container>
          <h3 className={css.ownerInfo__title}>О нашем магазине</h3>
          <div className={css.ownerInfo__text}>
            <p className={css.ownerInfo__line}>
              ИП Иванов Иван Иванович, зарегистрирован в Торговом реестре
              10.11.2000. проспект Победителей 111
            </p>
            <p className={css.ownerInfo__line}>
              УНП 123456789 выдано 15.11.2000г. Администрацией Ленинского района
              г.Минска.
            </p>
            <p className={css.ownerInfo__line}>
              Лицензия на розничную торговлю 60000/0386488 выдана
              Мингорисполкомом с 20.06.2012 г.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
