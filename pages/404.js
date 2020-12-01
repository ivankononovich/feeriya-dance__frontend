import Header from './../components/Header/Header'
import Container from './../components/Container/Container'
import Footer from './../components/Footer/Footer'
import css from './../styles/404.scss'
import Link from 'next/link'

import './../styles/404.scss'

const Error = () => {
  return (
    <>
      <Header />
      <img
        className={css.image_404}
        src="./../static/404.jpg"
        alt="Страница не найдена"
      />
      <Container>
        <p
          style={{
            padding: '0 20px',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              color: 'red',
              fontWeight: 'bold',
            }}
          >
            Ошибка!{' '}
          </span>
          Данной страницы не существует. Пожалуйста, перейдите на
          <Link href={'/'}>
            <a
              style={{
                color: '#5983f0',
                textDecoration: 'none',
              }}
            >
              {' '}
              главную{' '}
            </a>
          </Link>
          страницу.
        </p>
      </Container>
      <Footer />
    </>
  )
}

export default Error
