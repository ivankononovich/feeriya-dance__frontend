import { useState } from 'react'
import Link from 'next/link'

import css from './header.scss'
import Container from './../Container/Container'
import Contacts from './../Contacts/ContactsContainer'
import Categories from './../Categories/CategoriesContainer'
import MiniBasket from './../MiniBasket/MiniBasketContainer'
import BurgerMenu from './../BurgerMenu/BurgerMenu'

const Header = ({ adminLogin }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header>
      <Container
        additionalClasses={['container_width-max', 'container_bg_contacts']}
      >
        <Contacts />
      </Container>

      <Container>
        {/* <BurgerMenu /> */}
        <div className={css.burger} onClick={() => setShowMenu(!showMenu)}>
          <div className={css.burger__line}></div>
          <div className={css.burger__line}></div>
          <div className={css.burger__line}></div>
        </div>
        <Link href="/">
          <a className={css.header__logo}>Мой магазин</a>
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
          <Categories showMenu={showMenu} setShowMenu={setShowMenu} />
          {adminLogin && (
            <Link href="/creator-categories">
              <a className={css['header__add-categories']}>+</a>
            </Link>
          )}
          <MiniBasket />
        </Container>
      </Container>
    </header>
  )
}

export default Header
