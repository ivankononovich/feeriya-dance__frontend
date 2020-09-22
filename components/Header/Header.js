import Link from 'next/link'

import css from './header.scss'
import Container from './../Container/Container'
import Contacts from './../Contacts/ContactsContainer'
import Categories from './../Categories/CategoriesContainer'
import MiniBasket from './../MiniBasket/MiniBasketContainer'

const Header = () => (
  <header>
    <Container
      additionalClasses={['container_width-max', 'container_bg_contacts']}
    >
      <Contacts />
    </Container>

    <Container>
      <Link href="/">
        <a className={css.header__logo}>Feeriya Dance</a>
      </Link>
    </Container>

    <Container
      additionalClasses={[
        'container_width-max',
        'container_categories-wrapper',
      ]}
    >
      <Container
        additionalClasses={[
          'container_pos_rel',
          'container_categories-container',
        ]}
      >
        <Categories />
        <MiniBasket />
      </Container>
    </Container>
  </header>
)

export default Header
