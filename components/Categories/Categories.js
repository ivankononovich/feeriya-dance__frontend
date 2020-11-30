import Link from 'next/link'

import css from './categories.scss'

const Categories = ({ categories, showMenu, setShowMenu }) => {
  // console.log('categories: ', categories)

  let renderContent

  if (categories) {
    categories = categories.filter((category) => category.is_main_category)

    // console.log('categories: ', categories)

    renderContent = categories.map((category) => {
      // console.log('category ', category)
      const urlReq = `/category?id=${category.name_en.replace(' ', '-')}`

      return (
        <li
          className={css.categories__item}
          key={category.name_en.replace(' ', '-')}
        >
          <Link href={urlReq}>
            <a className={css.categories__link}>{category.name_ru}</a>
          </Link>
          {!!category.subcategories.length && (
            <ul className={css.categories__subcategories}>
              {category.subcategories.map((subcategory) => {
                {
                  /* const findSubCategories = categories.find(
                  (c) => c.name_en === subcategory,
                )
                if (!findSubCategories) return null */
                }
                if (!subcategory) return null

                return (
                  <li
                    // key={`${category.name_en.replace(
                    //   ' ',
                    //   '-',
                    // )}-${findSubCategories.name_en.replace(' ', '-')}-sub`}
                    key={`${subcategory.replace(
                      ' ',
                      '-',
                    )}-${subcategory.replace(' ', '-')}-sub`}
                  >
                    <Link
                      // href={`${urlReq}-${findSubCategories.name_en.replace(
                      //   ' ',
                      //   '-',
                      // )}`}
                      href={`${urlReq}-${subcategory}`}
                    >
                      <a className={css['categories__subcategory-link']}>
                        {/* {findSubCategories.name_ru} */}
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

  // console.log('categories: ', renderContent)

  return (
    <ul className={showMenu ? css['categories_active'] : css['categories']}>
      {renderContent}
    </ul>
  )
}

export default Categories
