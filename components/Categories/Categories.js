import Link from 'next/link'

import css from './categories.scss'

const Categories = ({ categories, showMenu, setShowMenu }) => {
  let renderContent

  if (categories) {
    categories = categories.filter((category) => category.is_main_category)

    renderContent = categories.map((category) => {
      const urlReq = `/category?id=${category.name_en.replace(' ', '-')}`

      return (
        <li
          className={css.categories__item}
          key={category.name_en.replace(' ', '-')}
        >
          <a
            className={css.categories__link}
            href={
              category.name_en === 'igri-dlya-malishei'
                ? 'category?id=toys-for-babies-Игрушки%20для%20малышей'
                : category.name_en === 'nastolnie-igri'
                  ? 'category?id=board-games-Настольные%20игры'
                  : category.name_en === 'constructori'
                    ? 'category?id=constructori-Конструкторы'
                    : '#'
            }>
            {category.name_ru}
          </a>
          {!!category.subcategories.length && (
            <ul className={css.categories__subcategories}>
              {category.subcategories.map((subcategory) => {
                if (!subcategory) return null

                return (
                  <li
                    key={`${subcategory.replace(
                      ' ',
                      '-',
                    )}-${subcategory.replace(' ', '-')}-sub`}
                  >
                    <Link href={`${urlReq}-${subcategory}`}>
                      <a
                        className={css['categories__subcategory-link']}
                        onClick={() =>
                          document.querySelector('.burger').click()
                        }
                      >
                        {subcategory}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </li>
      )
    })
  }

  return (
    <ul className={showMenu ? css['categories_active'] : css['categories']}>
      {renderContent}
    </ul>
  )
}

export default Categories
