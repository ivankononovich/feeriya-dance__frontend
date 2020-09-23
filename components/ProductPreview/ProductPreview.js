import Link from 'next/link'

import css from './product-preview.scss'

const ProductPreview = ({ image, nameRU,nameEN, price, options_name, options_value }) => (
  <div className={css['product-preview']}>
    <img
      src={`/static/products/${image}`}
      alt={nameRU}
      className={css['product-preview__img']}
    />
    <span className={css['product-preview__price']}>{price} бел.руб</span>
    <h3 className={css['product-preview__prod-title']}>{nameRU}</h3>
    <ul className={css['product-preview__options']}>
      {options_name.map((item, index) => (
        <li key={`${options_value[index]}-${item}`}>
          <span key="name">{item}:</span>{' '}
          <span key="value">{options_value[index].replaceAll('|', ', ')}</span>
        </li>
      ))}
      <li key="more-details">
        <Link href={`/product?id=${nameEN}`}>
          <a className={css['product-preview__link']}>Подробнее</a>
        </Link>
      </li>
    </ul>
  </div>
)

export default ProductPreview
