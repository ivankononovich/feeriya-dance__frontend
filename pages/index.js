import { connect } from 'react-redux'
import Head from 'next/head'

import css from 'styles/index.scss'
import Header from 'components/Header/Header'
import Slider from 'components/Slider/Slider'
import Container from 'components/Container/Container'
import Footer from 'components/Footer/Footer'

const HomePage = ({ adminLogin }) => {
  return (
    <>
      <Head>
        <title>Клякса | Главная страница</title>
      </Head>
      <Header adminLogin={adminLogin} />
      <Slider />
      <h2 className={css.title1}>О нас</h2>
      <Container>
        <p className={css['main-paragraph']}>
          Мы рады приветствовать вас, юных и взрослых посетителей нашего
          интернет-магазина Klaksa! Заглядывая в Klaksa Вы сразу же увидите наш
          огромный ассортимент детских игрушек в Беларуси:
        </p>
        <ul className={css['main-list']}>
          <li>- настольные и напольные игры;</li>
          <li>- развивающие игры;</li>
          <li>- головоломки;</li>
          <li>- куклы;</li>
          <li>- мозаику;</li>
          <li>- и многое другое для ваших детей.</li>
        </ul>
        <h2 className={css.title}>Оплата</h2>
        <div
          style={{
            marginBottom: '70px',
          }}
        >
          <p className={css['main-paragraph']}>
            Добавьте выбранные товары
            в корзину, а затем перейдите на страницу «Корзина».
          </p>
          <p className={css['main-paragraph']}>
            Введите имя и номер телефона. По указанному номеру с Вами свяжется наш
            менеджер для обсуждения деталей заказа.
          </p>
          <p className={css['main-paragraph']}>
            Когда поля заполены, нажмите кнопку "Отправить заказ".
          </p>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default connect((store) => ({ adminLogin: store.app.adminLogin }))(
  HomePage,
)
