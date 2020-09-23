import Link from 'next/link'

import css from './categories.scss'

const Categories = ({ categories }) => {
  let renderContent

  if (categories) {
    renderContent = categories.map((category) => {
      const urlReq = `/category?id=${category.nameEN}`
      if (!category.subcategories.length) return null

      return (
        <li className={css.categories__item} key={category.nameEN}>
          <Link href={urlReq}>
            <a className={css.categories__link}>{category.nameRU}</a>
          </Link>

          <ul className={css.categories__subcategories}>
            {category.subcategories.map((subcategory) => {
              const findSubCategories = categories.find(
                (c) => c.nameEN === subcategory,
              )
              if (!findSubCategories) return null

              return (
                <li key={`${category.nameEN}-sub`}>
                  <Link href={`${urlReq}-${findSubCategories.nameEN}`}>
                    <a className={css['categories__subcategory-link']}>
                      {findSubCategories.nameRU}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </li>
      )
    })
  }

  return <ul className={css.categories}>{renderContent}</ul>
}

export default Categories
