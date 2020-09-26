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
      const include = subCategories[category.name_en]

      return (
        <li className={css['creator-categories__item']} key={category.name_en}>
          <span>{category.name_ru}</span>
          <button
            className={css['creator-categories__item-add']}
            onClick={() => {
              if (include) {
                const newProps = {
                  ...subCategories,
                }
                delete newProps[category.name_en]

                setSubCategories(newProps)
              } else {
                setSubCategories({
                  ...subCategories,
                  [category.name_en]: category,
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
      name_ru: inputName.current.value,
      name_en: inputURL.current.value,
      subcategories: listKeys.map((key) => subCategories[key].name_en),
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
                    key={subCategories[key].name_en}
                    className={css['creator-categories__sub-item']}
                  >
                    - {subCategories[key].name_ru}
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
