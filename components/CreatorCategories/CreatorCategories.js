import Link from 'next/link'
import { useRef, useState } from 'react'

import fetch from 'isomorphic-unfetch'

import css from './creator-categories.scss'

const CreatorCategories = ({ categories }) => {
  const [subCategories, setSubCategories] = useState({})
  const listKeys = Object.keys(subCategories)
  const inputName = useRef(null)
  const inputURL = useRef(null)
  let renderContent

  if (categories) {
    renderContent = categories.map((category) => {
      if (!category.subcategories.length) return null
      const include = subCategories[category.nameEN]

      return (
        <li className={css['creator-categories__item']} key={category.nameEN}>
          <span>{category.nameRU}</span>
          <button
            className={css['creator-categories__item-add']}
            onClick={() => {
              if (include) {
                const newProps = {
                  ...subCategories,
                }
                delete newProps[category.nameEN]

                setSubCategories(newProps)
              } else {
                setSubCategories({
                  ...subCategories,
                  [category.nameEN]: category,
                })
              }
            }}
          >
            {include ? 'x' : <>&#10003;</>}
          </button>
        </li>
      )
    })
  }

  const handleSave = () => {
    const data = {
      nameRU: inputName.current.value,
      nameEN: inputURL.current.value,
      subcategories: listKeys.map((key) => subCategories[key].nameEN),
    }

    console.log('# data', data)

    fetch('/api/add-categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <div className={css['creator-categories']}>
      <div className={css['creator-categories__column']}>
        <span className={css['creator-categories__label']}>
          Название категории:
        </span>
        <input
          className={css['creator-categories__input']}
          type="text"
          ref={inputName}
        />
        <span className={css['creator-categories__label']}>URL категории:</span>
        <input
          className={css['creator-categories__input']}
          type="text"
          ref={inputURL}
        />
        {!!listKeys.length && (
          <>
            <h2 className={css['creator-categories__title']}>Подкатегории:</h2>
            <ul className={css['creator-categories__sub']}>
              {listKeys.map((key) => {
                return (
                  <li
                    key={subCategories[key].nameEN}
                    className={css['creator-categories__sub-item']}
                  >
                    - {subCategories[key].nameRU}
                  </li>
                )
              })}
            </ul>
          </>
        )}
        <button
          className={css['creator-categories__item-add']}
          onClick={handleSave}
        >
          Сохранить
        </button>
      </div>
      <ul className={css['creator-categories__list']}>{renderContent}</ul>
    </div>
  )
}

export default CreatorCategories
