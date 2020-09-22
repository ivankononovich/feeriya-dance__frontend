import Link from 'next/link'

import css from './product-preview.scss'

export default ({ image, nameRU, price, options, id }) => (
  <div className={css['product-preview']}>
    <img
      src={`/static/products/${image}`}
      alt={nameRU}
      className={css['product-preview__img']}
    />
    <span className={css['product-preview__price']}>{price} бел.руб</span>
    <h3 className={css['product-preview__prod-title']}>{nameRU}</h3>
    <ul className={css['product-preview__options']}>
      {options.map((item, index) => (
        <li key={index}>
          <span key="name">{item.name}</span>{' '}
          <span key="value">{item.value}</span>
        </li>
      ))}
      <li key="more-details">
        <Link href={`/product?id=${id}`}>
          <a className={css['product-preview__link']}>Подробнее</a>
        </Link>
      </li>
    </ul>
  </div>
)
