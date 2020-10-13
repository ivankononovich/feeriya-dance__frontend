import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeCategory, addCategory } from 'store/app/actions'

import css from './creator-categories.scss'

const CreatorCategories = ({ categories }) => {
  const dispatch = useDispatch()
  const [subCategories, setSubCategories] = useState({})
  const listKeys = Object.keys(subCategories)
  const inputName = useRef(null)
  const inputURL = useRef(null)
  let renderContent

  const handleSave = () => {
    dispatch(
      addCategory({
        name_ru: inputName.current.value,
        name_en: inputURL.current.value,
        subcategories: listKeys.map((key) => subCategories[key].name_en),
      }),
    )
  }

  const handleRemove = (name_en) => {
    dispatch(removeCategory(name_en))
  }

  if (categories) {
    renderContent = categories.map((category) => {
      const include = subCategories[category.name_en]

      return (
        <li className={css['creator-categories__item']} key={category.name_en}>
          <span>{category.name_ru}</span>
          <button
            className={css['creator-categories__item-button']}
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
          <button
            className={`${css['creator-categories__item-button']} ${css['creator-categories__item-button_remove']}`}
            onClick={() => handleRemove(category.name_en)}
          >
            Удалить категорию
          </button>
        </li>
      )
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
          className={css['creator-categories__item-button']}
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
