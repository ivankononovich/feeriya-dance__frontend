import Link from 'next/link'

import css from './product-preview.scss'

const ProductPreview = ({
  // image,
  // name_ru,
  // name_en,
  // price,
  // options_name,
  // options_value,
  products,
}) => {
  if (!products) return <div>Загрузка товаров...</div>
  let renderContent
  renderContent = products.map((product, i) => {
    return (
      <div className={css['product-preview']}>
        <img
          src={`/static/products/${product.image}`}
          alt={product.name_ru}
          className={css['product-preview__img']}
        />
        <span className={css['product-preview__price']}>
          {product.price} бел.руб
        </span>
        <h3 className={css['product-preview__prod-title']}>
          {product.name_ru}
        </h3>
        <ul className={css['product-preview__options']}>
          {product.options_name.map((item, index) => (
            <li key={`${product.options_value[index]}-${item}`}>
              <span key="name">{item}:</span>{' '}
              <span key="value">
                {product.options_value[index].replaceAll('|', ', ')}
              </span>
            </li>
          ))}
          <li key="more-details">
            <Link href={`/product?id=${product.name_en}`}>
              <a className={css['product-preview__link']}>Подробнее</a>
            </Link>
          </li>
        </ul>
      </div>
    )
  })

  return <ul className={css['product-preview-list']}>{renderContent}</ul>
}

export default ProductPreview
