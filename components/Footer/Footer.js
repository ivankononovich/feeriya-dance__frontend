import css from './footer.scss'
import Container from './../Container/Container'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.footerContacts}>
          <div className={css.footerContacts__item}>
            <h3 className={css.footerContacts__title}>самовызов</h3>
            <span className={css.footerContacts__text}>
              г. Минск, ТЦ "Глобо", ул. Уманская,54, 1-ый этаж, пав. 83
            </span>
          </div>
          <div className={css.footerContacts__item}>
            <h3 className={css.footerContacts__title}>доставка</h3>
            <span className={css.footerContacts__text}>
              <p>от 50 руб. доставка БЕСПЛАТНАЯ</p>
              <p>при заказе до 50 руб. доставка 5 руб.</p>
              <p>
                Доставка осуществляется почтой или курьером в пределах г. Минска
              </p>
            </span>
          </div>
          <div className={css.footerContacts__item}>
            <h3 className={css.footerContacts__title}>Время работы</h3>
            <span className={css.footerContacts__text}>
              <p>пн-сб с 10:00 до 19:00</p>
              <p>воскресенье с 10:00 до 18:00</p>
            </span>
          </div>
        </div>
      </Container>
      <div className={css.ownerInfo}>
        <Container>
          <div className={css.ownerInfo__text}>
            <p className={css.ownerInfo__line}>
              ИП Карташова Татьяна Вячеславовна, зарегистрирована в Торговом
              реестре 21.10.2020 г. ул. Славинского 29/58
            </p>
            <p className={css.ownerInfo__line}>
              УНП 193481303 выдано 21.10.2020 г. Администрацией Первомайского
              района г. Минска.
            </p>
            <p className={css.ownerInfo__line}>
              Лицензия на розничную торговлю 0802953 выдана Мингорисполкомом с
              21.10.2020 г.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
